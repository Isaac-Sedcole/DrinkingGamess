
import React, { useEffect, useRef, useState } from "react";
import punishmentWheel from '../data/punishmentWheel'
import AppButton from './AppButton'
import { useAnimatedRef } from "react-native-reanimated";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Card } from 'react-native-paper'
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  Button,
  Easing 
} from "react-native";


function PunishmentWheel (props) {
  
  const punishWheel = punishmentWheel.punishmentWheel
  const { width: windowWidth } = useWindowDimensions();
  const scrollView = useRef()
  const[goToRuleModal, setGoToRuleModal] = useState(false)

  const[bigRandomList, setBigRandomList] = useState([])
  const [manualSpin, setManualSpin] = useState(false)

  useEffect(()=>{
    setBigRandomList([])
    makeBigArr()
  },[])

  const makeBigArr = () => {
    let tempList = []
    for(let i = 0; i<5; i++){
      tempList.push.apply(tempList, punishWheel)
    }

    for(let i = 0; i< tempList.length; i++) {
      tempList[i].id += Math.floor(Math.random() * 1000)
    }
    
    for (let i = tempList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempList[i], tempList[j]] = [tempList[j], tempList[i]];
  }
    
    setBigRandomList(tempList)
  }

  /** TRYING TO SLOW THE SCROLLING */
    const scrollRef = useRef()
    const scrollAnimation = useRef(new Animated.Value(0))
    const [contentHeight, setContentHeight] = useState(0)
  
    useEffect(() => {
      scrollAnimation.current.addListener((animation) => {
        scrollRef.current &&
          scrollRef.current.scrollTo({
            y: animation.value,
            animated: false,
          })
      })
      if (contentHeight) {
        Animated.timing(scrollAnimation.current, {
          toValue: contentHeight,
          duration: contentHeight * 100,
          useNativeDriver: true,
          easing: Easing.linear,
        }).start()
      }
      return () => scrollAnimation.current.removeAllListeners()
    }, [contentHeight])
  /** HAS ENDED */
  
  //each time the button is pushed - randomize and create the list
  const spinTheCarosel = () => {
    // setNewList(!newList)
    let number = Math.floor(Math.random() * bigRandomList.length)
    let xPos = Math.round(number * windowWidth)
    scrollRef.current.scrollTo({ x: xPos, y: 0, animated: true })
    // scrollView.current.scrollTo({ x: xPos, y: 0, animated: true })
}

const handleScroll= (event) => {
  // console.log(event.nativeEvent.contentOffset.y);
}

const manualSpinMethod = () => {
  setManualSpin(!manualSpin)
}

return (
  <SafeAreaView style={styles.container}>
    <View style={{paddingBottom: hp('2%')}}>
      <AppButton onPress={manualSpinMethod} title={manualSpin ? 'Deactive Manual Spin' : 'Activate Manual Spin'}/>
    </View>
    <View style={{paddingBottom: hp('2%')}}>
      <AppButton onPress={spinTheCarosel} title='spin'/>
    </View>
    <View style={styles.scrollContainer}>
      <ScrollView
        // ref={scrollView}
        ref={scrollRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEnabled={manualSpin}
        removeClippedSubviews={true}
        onContentSizeChange={(width, height) => {
          setContentHeight(height)
        }}
        onScrollBeginDrag={() => scrollAnimation.current.stopAnimation()}

        decelerationRate='normal'
        endFillColor={'blue'}

        // contentOffset={0, 0}
        // snapToInterval={100}
        // snapToAlignment='center'
        // ref={aref}
        // onScroll={Animated.event([
          //   {
            //     nativeEvent: {
              //       contentOffset: {
                //         x: scrollX
                //       }
                //     }
                //   }
                // ]),}
                // onScroll={handleScroll}
                scrollEventThrottle={100}
                >
        {bigRandomList.map(punishmentObj => {
          return (
            <View
            style={{ width: windowWidth, height: hp('40%') }}
            key={punishmentObj.id}
            >
              {/* <Card style={{height: hp('20%'), width: windowWidth}}> */}
                <View style={styles.textContainer}>
                    <AppButton onPress={()=> props.navigation.navigate("Showing a house rule", { rule: punishmentObj })} title={punishmentObj.name} />
                </View>
              {/* </Card> */}
            </View>
          );
        })}
      </ScrollView>
      {/* <View style={styles.indicatorContainer}>
        {images.map((image, imageIndex) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (imageIndex - 1),
              windowWidth * imageIndex,
              windowWidth * (imageIndex + 1)
            ],
            outputRange: [8, 16, 8],
            extrapolate: "clamp"
          });
          return (
            <Animated.View
            key={imageIndex}
            style={[styles.normalDot, { width }]}
            />
            );
          })}
        </View> */}
    </View>
  </SafeAreaView>
);
}

/** TEMP */
const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center"
},
scrollContainer: {
  height: hp('50%'),
  alignItems: "center",
  justifyContent: "center"
},
card: {
  flex: 1,
  marginVertical: 4,
  marginHorizontal: 16,
  borderRadius: 5,
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center"
},
textContainer: {
  backgroundColor: "rgba(0,0,0, 0.7)",
  paddingHorizontal: wp('1%'),
  paddingVertical: hp('8%'),
  borderRadius: wp('2%')
},
infoText: {
  color: "white",
  fontSize: 16,
  fontWeight: "bold"
},
normalDot: {
  height: 8,
  width: 8,
  borderRadius: 4,
  backgroundColor: "silver",
  marginHorizontal: 4
},
indicatorContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
}
});

export default PunishmentWheel
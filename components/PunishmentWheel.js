
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
  Button 
} from "react-native";


function PunishmentWheel (props) {
  
  const punishWheel = punishmentWheel.punishmentWheel
  const { width: windowWidth } = useWindowDimensions();
  const scrollView = useRef()
  const[goToRuleModal, setGoToRuleModal] = useState(false)
  
  const navigateToRuleModal = () => {
      setGoToRuleModal(true)
    }
  const spinTheCarosel = () => {
    let number = Math.floor(Math.random() * punishWheel.length)
    let xPos = Math.round(number * windowWidth)
    scrollView.current.scrollTo({ x: xPos, y: 0, animated: true })
}

const handleScroll= (event) => {
  console.log(event.nativeEvent.contentOffset.y);
}

return (
  <SafeAreaView style={styles.container}>
    <AppButton onPress={spinTheCarosel} title='spin'/>
    <View style={styles.scrollContainer}>
      <ScrollView
        ref={scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEnabled={false}
        
        // decelerationRate='slow'
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
        {punishWheel.map(imageIndex => {
          return (
            <View
            style={{ width: windowWidth, height: 250 }}
            key={imageIndex}
            >
                <View style={styles.textContainer}>
                    <AppButton onPress={props.navigation.navigate("Showing a house rule", { rule: punishWheel[imageIndex] })} title={punishWheel[imageIndex].name} />
                </View>
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
    {showPunishment && 
      <View>
        <AppButton onPress={navigateToRuleModal} title={punishment.name}/>
      </View>
    }
    {goToRuleModal && props.navigation.navigate("Showing a house rule", { rule: punishment })}
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
  height: 300,
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
  paddingHorizontal: 24,
  paddingVertical: 8,
  borderRadius: 5
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
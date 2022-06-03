import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { Card } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppButton from "./AppButton"



function BoozeOrNoBooze(props) {

  const [currentRule, setCurrentRule] = useState({})
  const [showRuleModal, setShowRuleModal] = useState(false)



  useEffect(()=> {
    setShowRuleModal(false)
},[])


  let gameName = props.route.params.game.name
  let ruleDescObj = props.route.params.game.ruleDescription
  let rules = props.route.params.game.customRules
  // const rulesDescription = Object.keys(ruleDescObj).map(key => <option value={key}>{ruleDescObj[key]}</option>)

  const activateShowRuleModal = () => {
    if(!showRuleModal) {
      setShowRuleModal(true)
    } else {
      setShowRuleModal(false)
    }
  }


  return (
    <>
      <ScrollView style={[styles.scrollViewCont]}>
        <View style={[styles.container, {
          alignItems: 'center'
        }]}>

          <Text style={[styles.titleText]}>{gameName}</Text>
          <View>
          {/* <AppButton onPress={() => props.navigation.navigate("Play horses")} title={'Start Game'} buttonColour={'red'} /> */}
          </View>

          <View style={{ paddingTop: hp("2%") }}>
            <Text style={[styles.xxtraSubText]}>This game is suggested for {props.route.params.game.suggestedPlayers} players</Text>
          </View>
          <View style={{ paddingTop: hp("1%") }}>
            <Text style={[styles.xxtraSubText]}>DrunkOMeter reaches a solid {props.route.params.game.drunkOMeter}/10</Text>
          </View>
          <View style={{ paddingTop: hp("1%") }}>
            <Text style={[styles.subTitleText]}>You will need:</Text>
          </View>
            <Text style={[styles.subText]}>{props.route.params.game.itemsRequired.map(item => { return item + ", " })}</Text>

          <View style={{ paddingTop: hp("1%") }}>
            <Text style={[styles.subTitleText]}>How to Play:</Text>
          </View>
          <View style={{ paddingTop: hp("1%") }}>
            <Text style={[styles.subText]}>{props.route.params.game.explanationBlurb}</Text>
          </View>
          
          <View style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}>
            <View  stlye={{ justifyContent: "center" }}>
                  <View style={[styles.cardContainer]}>
                    <View style={[styles.cardContent]}>
                      <AppButton onPress={activateShowRuleModal} title='Show Rules' />
                    </View>
                  </View>
                </View>
            {/* {rules.map(rule => {
              return (
                <View key={rule} stlye={{ justifyContent: "center" }}>
                  <View style={[styles.cardContainer]}>
                    <View style={[styles.cardContent]}>
                      <AppButton onPress={() => activateShowRuleModal(rule)} title={rule} />
                    </View>
                  </View>
                </View>
              )
            })} */}
            
            {/* <View style={[styles.descriptionContainer]}> 
              {showRuleModal && <Text style={[styles.descriptionText]}>{currentRule.desc}</Text>}
            </View> */}
          </View>
          {showRuleModal && <Text style={[styles.rulesText]}>{ruleDescObj}</Text>}
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp("5%"),
    paddingBottom: hp("2%"),
    // marginTop: hp("2.5%")
  },
  scrollViewCont: {
    flex: 1
  },
  cardContainer: {
    margin: wp("1%"),
    // width: wp("42.5%"),
    width: wp("80%"),
    height: hp("5%"),
    alignItems: "center"
  },
  cardTitle: {
    width: wp("40%"),
    height: hp("4%"),
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  cardContent: {
    width: wp("50%"),
    height: hp("6%")
  },
  wholeCardContainer: {
    width: wp("90%"),
  },
  titleText: {
    fontFamily: "sans-serif",
    fontSize: wp("8%"),
    color: "#2F4F4F",
    fontWeight: "600",
  },
  subTitleText: {
    fontFamily: "sans-serif",
    fontSize: wp("5%"),
    color: "#2F4F4F",
    fontWeight: "600",
  },
  descriptionText: {
    fontFamily: "sans-serif",
    fontSize: wp("5%"),
    color: "#2F4F4F",
    fontWeight: "600",
    flex: 1,
    flexWrap: 'wrap',
  },
  descriptionContainer:{
    flexDirection: 'row',
    // height: hp('40%'),
    width: wp('80%'),
    marginLeft: wp('5%'),
  },
  xxtraSubText: {
    fontFamily: "sans-serif",
    fontSize: wp("4.5%"),
    color: "#2d5287",
    fontWeight: "600",
  },
  subText: {
    fontFamily: "sans-serif-light",
    fontSize: wp("4%"),
    fontWeight: "500",
    color: "#008B8B"
  },
  listSeperatorCenter: {
    marginTop: hp("0.5%"),
    alignItems: "center"
  },
  listSeperatorLeft: {
    marginTop: hp("0.5%"),
    alignItems: "flex-start"
  },
  rulesText: {
    fontFamily: "sans-serif",
    fontSize: wp("4%"),
    color: "#2d5287",
    fontWeight: "500",
  },
  titleStyling: {
    color:"#fff", 
    fontWeight:"bold", 
    backgroundColor: "#2d5287", 
    borderRadius:wp("1%"), 
    paddingHorizontal: wp("1%") ,
    marginBottom:hp("1%"), 
    marginRight:wp("25%"),
    alignSelf: "center"
  },
  middleButton: {
    marginLeft: wp("25%")
  }
});

export default BoozeOrNoBooze
    
    
    
    
    

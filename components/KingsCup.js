import React, { Fragment, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { Card } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppButton from "./AppButton"


function KingsCup(props) {
  
  const [showRules, setShowRules] = useState(false)
  const [showRuleModal, setShowRuleModal] = useState(false)
  const [currentRule, setCurrentRule] = useState({})
  const [showKingsCupCustom, setShowKingsCupCustom] = useState(false)

  const gameName = props.route.params.game.name
  let rulesObj = props.route.params.game.rules

  const activateShowRules = () => {
    // console.log(props.navigation)
    setShowRules(!showRules)
  }

  useEffect(()=> {
    setShowRules(false)
    setShowKingsCupCustom(false)
    setShowRuleModal(false)
  },[])

  let ruleDescObj = props.route.params.game.ruleDescription

    let rules = Object.keys(rulesObj).map(key => <option value={key}>{rulesObj[key]}</option>)
    //has automatically ordered list however we want the 9th index (Ace - snake eyes) to still appear at the top
    //weird object
    let ace = rules.splice(9,1)
    rules.unshift(ace[0])
    
    const rulesDescription = Object.keys(ruleDescObj).map(key => <option value={key}>{ruleDescObj[key]}</option>)

    const activateShowRuleModal = (ruleNeedingDescription) => {
      // console.log(rulesDescription)
      let matchingWord = ruleNeedingDescription.replace(/\s/g, "")
      let theDescription = rulesDescription.filter(rule => {
        if (rule.props.value.toLowerCase() == matchingWord.toLowerCase()) {
          return rule
        }
      })
      let newObj = { name: theDescription[0].props.value, desc: theDescription[0].props.children }
      // console.log(newObj)
      setCurrentRule(newObj)
      setShowRuleModal(true)
    }

    const activateShowKingsCupRules = () => {
      setShowKingsCupCustom(true)
    }


    return (
      <>
        <ScrollView style={[styles.scrollViewCont]}>
          <View style={[styles.container, {
            alignItems: 'center'
          }]}>

            <Text style={[styles.titleText]}>{gameName}</Text>
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
              <Text style={[styles.subText]}>{props.route.params.game.explanationBlurb}</Text>
            <View style={{ paddingTop: hp("1%") }}>
            <Button onPress={() => activateShowRules()} title="Show Rules!" />
            </View>
            <View style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}>
              {showRules && rules.map(rule => {
                //name was too long and made the button multi-lined - easiest way around the issue
                if(rule.props.children == "question master"){
                  
                  return (
                    <View key={rule.props.children} stlye={{ justifyContent: "center" }}>
                      <Card style={[styles.cardContainer]}>
                        <View style={{ flexDirection: "row" }}>
                          <View style={[styles.cardTitle]}>
                            <Card.Title titleStyle={[styles.titleStyling]} title={rule.props.value} />
                          </View>
                          <View style={[styles.cardContent]}>
                            <Card.Content><AppButton onPress={() => activateShowRuleModal(rule.props.children)} title={"q master"} /></Card.Content>
                          </View>
                        </View>
                      </Card>
                    </View>
                  )

                } else {
                return (
                  <View key={rule.props.children} stlye={{ justifyContent: "center" }}>
                    <Card style={[styles.cardContainer]}>
                      <View style={{ flexDirection: "row" }}>
                        <View style={[styles.cardTitle]}>
                          <Card.Title titleStyle={[styles.titleStyling]} title={rule.props.value} />
                        </View>
                        <View style={[styles.cardContent]}>
                          <Card.Content><AppButton onPress={() => activateShowRuleModal(rule.props.children)} title={rule.props.children} /></Card.Content>
                        </View>
                      </View>
                    </Card>
                  </View>
                )
                }
              })}
              <View style={[styles.middleButton]}>
                {showRules && <Button onPress={() => activateShowKingsCupRules()} title="Custom Rules"/>}
              </View> 
              {showKingsCupCustom && props.navigation.navigate("Show kings cup custom rules")}
            </View>
          </View>
        </ScrollView>
        {showRuleModal && props.navigation.navigate("Showing a rule", { rule: currentRule })}
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
    width: wp("85%"),
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
    width: wp("40%"),
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

export default KingsCup
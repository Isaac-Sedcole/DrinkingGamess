import React, { Fragment, useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { Card } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppButton from "./AppButton"


function Game(props) {

  const [showRules, setShowRules] = useState(false)
  const [showRuleModal, setShowRuleModal] = useState(false)
  const [currentRule, setCurrentRule] = useState({})

  const gameName = props.route.params.game.name
  let rulesObj = props.route.params.game.rules

  const activateShowRules = () => {
    // console.log(props.navigation)
    setShowRules(!showRules)
  }

  if (gameName == "Kings Cup") {

    let ruleDescObj = props.route.params.game.ruleDescription

    const rules = Object.keys(rulesObj).map(key => <option value={key}>{rulesObj[key]}</option>)
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
      setShowRuleModal(!showRuleModal)
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
                if(rule.props.children.toLowerCase() == "question master"){
                  
                  return (
                    <View stlye={{ justifyContent: "center" }}>
                      <Card style={[styles.cardContainer]}>
                        <View style={{ flexDirection: "row" }}>
                          <View style={[styles.cardTitle]}>
                            <Card.Title title={rule.props.value} />
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
                  <View stlye={{ justifyContent: "center" }}>
                    <Card style={[styles.cardContainer]}>
                      <View style={{ flexDirection: "row" }}>
                        <View style={[styles.cardTitle]}>
                          <Card.Title title={rule.props.value} />
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
            </View>
          </View>
        </ScrollView>
        {showRuleModal && props.navigation.navigate("Showing a rule", { rule: currentRule })}
      </>
    )
  } else {
    // console.log(rulesObj)
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
            <View style={{ paddingTop: hp("1%") }}>
            {showRules && <Text style={[styles.rulesText]}>{rulesObj.rules}</Text>}
            </View>
          </View>
        </ScrollView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp("5%"),
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
  }
});

export default Game


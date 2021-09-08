import React, { Fragment, useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { Card } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


function Game({ route, navigation }) {

  const [showRules, setShowRules] = useState(false)
  const [showRuleModal, setShowRuleModal] = useState(false)
  const [currentRule, setCurrentRule] = useState("")

  const gameName = route.params.game.name
  let rulesObj = route.params.game.rules

  const activateShowRules = () => {
    // console.log(navigation)
    setShowRules(!showRules)
  }

  if (gameName == "Kings Cup") {

    let ruleDescObj = route.params.game.ruleDescription

    const rules = Object.keys(rulesObj).map(key => <option value={key}>{rulesObj[key]}</option>)
    const rulesDescription = Object.keys(ruleDescObj).map(key => <option value={key}>{ruleDescObj[key]}</option>)

    const activateShowRuleModal = (ruleNeedingDescription) => {
      let matchingWord = ruleNeedingDescription.replace(/\s/g, "")
      let theDescription = rulesDescription.map(rule => {
        if (rule.props.value.toLowerCase() == matchingWord.toLowerCase()) {
          return rule.props.value + " " + rule.props.children
        }

      })
      setCurrentRule(theDescription)
      setShowRuleModal(!showRuleModal)
    }


    return (
      <ScrollView style={[styles.scrollViewCont]}>
        <View style={[styles.container, {
          alignItems: 'center'
        }]}>

          <Text>Hi! welcome to {gameName}</Text>
          {/* <button>Customize rules</button> */}

          <Text>This game is suggested for {route.params.game.suggestedPlayers} players</Text>
          <Text>DrunkOMeter reaches a solid {route.params.game.drunkOMeter}/10</Text>
          <Text>You will need: {route.params.game.itemsRequired.map(item => { return item + ", " })}to play.</Text>
          <Text>{route.params.game.explanationBlurb}</Text>
          <Button onPress={() => activateShowRules()} title="Show Rules!" />
          <View style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}>
            {showRules && rules.map(rule => {
              return (
                <View key={rule.id} stlye={{justifyContent: "center"}}>
                <Card style={[styles.cardContainer]}>
                  <View style={{ flexDirection: "column"}}>
                    <View style={[styles.cardTitle]}>
                      <Card.Title title={rule.props.value} />
                    </View>
                    <View style={[styles.cardContent]}>
                      <Card.Content><Button onPress={() => activateShowRuleModal(rule.props.children)} title={rule.props.children} /></Card.Content>
                    </View>
                  </View>
                </Card>
                </View>
              )
            })}
          </View>
          {showRuleModal && navigation.navigate("Showing a rule", { rule: currentRule })}
        </View>
      </ScrollView>
    )
  } else {
    // console.log(rulesObj)
    return (
      <ScrollView style={[styles.scrollViewCont]}>

      <View style={[styles.container, {
        flexDirection: "column",
        alignItems: 'center'
      }]}>
        <Text>Hi! welcome to {gameName}</Text>
        {/* <button>Customize rules</button> */}

        <Text>This game is suggested for {route.params.game.suggestedPlayers} players</Text>
        <Text>DrunkOMeter reaches a solid {route.params.game.drunkOMeter}/10</Text>
        <Text>You will need: {route.params.game.itemsRequired.map(item => { return item + ", " })}to play.</Text>
        <Text>{route.params.game.explanationBlurb}</Text>
        <Button onPress={() => activateShowRules()} title="Show Rules!" />
        {showRules && <Text>{rulesObj.rules}</Text>}

      </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp("5%"),
  },
  scrollViewCont:{
    flex: 1
  },
  cardContainer: {
    margin: wp("1%"),
    width: wp("42.5%"),
    height: hp("13%"),
    alignItems: "center"
  },
  cardTitle: {
    width: wp("40%"),
    height: hp("6%")
  },
  cardContent: {
    width: wp("40%"),
    height: hp("6%")
  },
  wholeCardContainer: {
    width: wp("90%"),
  }
});

export default Game


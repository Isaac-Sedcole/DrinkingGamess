import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

function Game({route, navigation}) {

  const [showRules, setShowRules] = useState(false)
  const [showRuleModal, setShowRuleModal] = useState(false)
  const [currentRule, setCurrentRule] = useState("")

  const gameName = route.params.game.name
  let rulesObj = route.params.game.rules
  let ruleDescObj = route.params.game.ruleDescription

  const rules = Object.keys(rulesObj).map(key => <option value={key}>{rulesObj[key]}</option>)
  const rulesDescription = Object.keys(ruleDescObj).map(key => <option value={key}>{ruleDescObj[key]}</option>)

  const activateShowRules = () => {
    console.log(navigation)
    setShowRules(!showRules)
  }

  const activateShowRuleModal = (ruleNeedingDescription) => {
    let matchingWord = ruleNeedingDescription.replace(/\s/g,"")
    let theDescription = rulesDescription.map(rule => {
      if(rule.props.value.toLowerCase() == matchingWord.toLowerCase()) {
        return  rule.props.value+ " " +rule.props.children
      }
      
    })
    setCurrentRule(theDescription)
    setShowRuleModal(!showRuleModal)
  }

  
  return (
    <>
    <Text>Hi! welcome to {gameName}</Text>
    {/* <button>Customize rules</button> */}
    {gameName == "Kings Cup" && <Text>Yeah its the kingscup</Text>}

    <Text>This game is suggested for {route.params.game.suggestedPlayers} players</Text>
    <Text>DrunkOMeter reaches a solid {route.params.game.drunkOMeter}/10</Text>
    <Text>You will need: {route.params.game.itemsRequired.map(item => {return item+ ", "})}to play.</Text>
    <Text>{route.params.game.explanationBlurb}</Text>
    <Button onPress={() => activateShowRules()} title="Show Rules!"/>
    {showRules && rules.map(rule => {
      return (
        <div key={rule.props.value}>
        {rule.props.value} : <Button onPress={() => activateShowRuleModal(rule.props.children)} title={rule.props.children}/>
        </div>
      )
    })}

    {showRuleModal && navigation.navigate("Showing a rule", {rule: currentRule})}
    </>
  )
}

export default Game


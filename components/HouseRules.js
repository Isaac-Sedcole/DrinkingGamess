import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import houseRulesList from '../data/houseRules'
import CheckBox from './CheckBox'


function HouseRules ({ navigation }) {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [compareList, setCompareList] = useState([])
    const [fullHouseRules, setFullHouseRules]  = useState([])
    const [showHouseRuleModal, setShowHouseRuleModal] = useState(false)
    const [currentHouseRule, setCurrentHouseRule] = useState({})

    useEffect(() => {
      
      setFullHouseRules(houseRulesList.houseRules.map(rule => {
        return rule
      }))

    },[])

    const handleCheckBox = (index) => {
      const rules = [...fullHouseRules]
      rules[index].checked = !rules[index].checked
      setFullHouseRules(rules)
    }

    const navigateToModal = () => {
      if (showHouseRuleModal) {
        navigation.navigate("Showing a rule", {rule: currentHouseRule})
      }
    }

    const activateShowHouseRuleModal = (houseRule) => {
      console.log(houseRule)
      let ruleDescription = fullHouseRules.filter(rule => {return houseRule.id == rule.id})
      console.log(ruleDescription[0])
      setCurrentHouseRule(ruleDescription[0])
      setShowHouseRuleModal(!showHouseRuleModal)
      navigateToModal()
    }

    return (
        <>
        <Text>Hi please select some House Rules</Text>
        {fullHouseRules.map(rule => {
            return (
                
                <div key={rule.id}>
                <br></br>
                <CheckBox label={rule.name} status={fullHouseRules[rule.id-1].checked ? "checked" : "unchecked"} onPress={() => handleCheckBox(rule.id-1)}></CheckBox>
                <button onClick={() => activateShowHouseRuleModal(rule)}>Rule Description</button>
                </div>
                
            )
        })}

        {/* {showHouseRuleModal && navigation.navigate("Showing a rule", {rule: currentHouseRule})} */}
        </>
    )
}

export default HouseRules
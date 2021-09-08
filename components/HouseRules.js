import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Modal, Button, ScrollView } from 'react-native'
import { setHouseRules } from '../actions'
import houseRulesList from '../data/houseRules'
import CheckBox from './CheckBox'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card } from 'react-native-paper'


function HouseRules(props) {

  // const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [currentRules, setCurrentRules] = useState([])
  const [fullHouseRules, setFullHouseRules] = useState([])
  const [showHouseRuleModal, setShowHouseRuleModal] = useState(false)
  const [currentHouseRule, setCurrentHouseRule] = useState({})

  useEffect(() => {
    setFullHouseRules(houseRulesList.houseRules.map(rule => {
      return rule
    }))
    setShowHouseRuleModal(false)
  }, [])

  const handleCheckBox = (index) => {
    if (showHouseRuleModal) {
      setShowHouseRuleModal(!showHouseRuleModal)
    }
    const rules = [...fullHouseRules]
    rules[index].checked = !rules[index].checked
    setFullHouseRules(rules)
    props.dispatch(setHouseRules(rules))
  }

  const activateShowHouseRuleModal = (houseRule) => {
    let ruleDescription = fullHouseRules.filter(rule => { return houseRule.id == rule.id })
    setCurrentHouseRule(ruleDescription[0])
    setShowHouseRuleModal(!showHouseRuleModal)
  }

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <Text>Hi please select some House Rules</Text>
        {fullHouseRules.map(rule => {
          return (
            <View key={rule.id}>
              <Card style={{ margin: 20, width: 250, height: 125 }}>
                <Card.Title title={<CheckBox label={rule.name} status={fullHouseRules[rule.id - 1].checked ? "checked" : "unchecked"} onPress={() => handleCheckBox(rule.id - 1)}></CheckBox>} />
                {/* <CheckBox label={rule.name} status={fullHouseRules[rule.id-1].checked ? "checked" : "unchecked"} onPress={() => handleCheckBox(rule.id-1)}></CheckBox> */}
                <Card.Content>
                  <Button onPress={() => activateShowHouseRuleModal(rule)} title="Rule Description" />
                </Card.Content>
              </Card>
            </View>
          )
        })}
      </ScrollView>

      {showHouseRuleModal && props.navigation.navigate("Showing a house rule", { rule: currentHouseRule })}
    </>
  )
}

// const mapDispatchToProps = dispatch => {
//   let actions = bindActionCreators({setHouseRules})
//   return {...actions, dispatch}
// }

// export default connect(null,mapDispatchToProps)(HouseRules)
export default connect()(HouseRules)

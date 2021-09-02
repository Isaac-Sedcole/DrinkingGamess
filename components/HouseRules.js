import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Modal, Button } from 'react-native'
import { setHouseRules } from '../actions'
import houseRulesList from '../data/houseRules'
import CheckBox from './CheckBox'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


function HouseRules (props) {

    // const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [currentRules, setCurrentRules] = useState([])
    const [fullHouseRules, setFullHouseRules]  = useState([])
    const [showHouseRuleModal, setShowHouseRuleModal] = useState(false)
    const [currentHouseRule, setCurrentHouseRule] = useState({})

    useEffect(() => {
      setFullHouseRules(houseRulesList.houseRules.map(rule => {
        return rule
      }))
      setShowHouseRuleModal(false)
    },[])

    // useEffect(() => {
    //   console.log("useEffect has run")
    //   setCurrentRules(fullHouseRules.filter(rule => {return rule.checked}))
    //   props.dispatch(setHouseRules(currentRules))
    // },[fullHouseRules])

    const handleCheckBox = (index) => {
      const rules = [...fullHouseRules]
      rules[index].checked = !rules[index].checked
      setFullHouseRules(rules)
      props.dispatch(setHouseRules(rules))
      // console.log(setHouseRules(fullHouseRules))
      // setCurrentRules(fullHouseRules.filter(rule => {return rule.checked}))
      // props.dispatch(setHouseRules(currentRules))
    }

    const activateShowHouseRuleModal = (houseRule) => {
      let ruleDescription = fullHouseRules.filter(rule => {return houseRule.id == rule.id})
      setCurrentHouseRule(ruleDescription[0])
      setShowHouseRuleModal(!showHouseRuleModal)
    }

    return (
        <>
        <Text>Hi please select some House Rules</Text>
        {fullHouseRules.map(rule => {
            return (
                
                <div key={rule.id}>
                <br></br>
                <CheckBox label={rule.name} status={fullHouseRules[rule.id-1].checked ? "checked" : "unchecked"} onPress={() => handleCheckBox(rule.id-1)}></CheckBox>

                <Button onPress={() => activateShowHouseRuleModal(rule)} title="Rule Description"/>
                
                </div>
                
            )
        })}

        {showHouseRuleModal && props.navigation.navigate("Showing a house rule", {rule: currentHouseRule})}
        </>
    )
}

// const mapDispatchToProps = dispatch => {
//   let actions = bindActionCreators({setHouseRules})
//   return {...actions, dispatch}
// }

// export default connect(null,mapDispatchToProps)(HouseRules)
export default connect()(HouseRules)

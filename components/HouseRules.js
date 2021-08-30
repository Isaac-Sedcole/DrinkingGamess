import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import houseRulesList from '../data/houseRules'
import { Checkbox } from 'react-native-paper'


function HouseRules ({ navigation }) {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [compareList, setCompareList] = useState([])
    const [fullHouseRules, setFullHouseRules]  = useState([])

    useEffect(() => {
      
      setFullHouseRules(houseRulesList.houseRules.map(rule => {
        return rule
      }))

    },[])

    const test = (index) => {
      const rules = [...fullHouseRules]
      rules[index].checked = !rules[index].checked
      setFullHouseRules(rules)
    }

    const changeView = (game) => {
        // console.log(game.id, game.name)
        navigation.navigate("Selected game", {game})
    }

    return (
        <>
        <Text>Hi please select some HouseRules</Text>
        {fullHouseRules.map(rule => {
            return (
                
                <div key={rule.id}>
                <br></br>
                <Checkbox title={fullHouseRules[rule.id-1].name} status={fullHouseRules[rule.id-1].checked ? "checked" : "unchecked"} onPress={() => test(rule.id-1)}></Checkbox>
                </div>
                
            )
        })}
        </>
    )
}

export default HouseRules
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Modal, Button, ScrollView } from 'react-native'
import { setHouseRules } from '../actions'
import houseRulesList from '../data/houseRules'
import CheckBox from './CheckBox'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


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
      <ScrollView style={[styles.scrollViewCont]}>
        <View style={[styles.container, {
          alignItems: 'center'
        }]}>
          <Text>Hi please select some House Rules</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>

            {fullHouseRules.map(rule => {
              return (
                <View key={rule.id} style={[{ justifyContent: "center" }]}>
                  <Card style={[styles.cardContainer]}>
                    <View style={[styles.cardTitle, {flexWrap: "wrap", flexDirection: "column"}]}>
                      <Card.Title title={<CheckBox label={rule.name} status={fullHouseRules[rule.id - 1].checked ? "checked" : "unchecked"} onPress={() => handleCheckBox(rule.id - 1)}></CheckBox>} />
                    </View>
                    <View style={[styles.cardContent]}>
                      <Card.Content>
                        <Button onPress={() => activateShowHouseRuleModal(rule)} title="Rule Description" />
                      </Card.Content>
                    </View>
                  </Card>
                </View>
              )
            })}
          </View>
        </View>
      </ScrollView>

      {showHouseRuleModal && props.navigation.navigate("Showing a house rule", { rule: currentHouseRule })}
    </>
  )
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
    width: wp("42.5%"),
    height: hp("20%"),
    alignItems: "center"
  },
  cardTitle: {
    fontSize: wp("1%")
  },
  cardContent: {
    width: wp("40%"),
    height: hp("6%")
  },
  wholeCardContainer: {
    width: wp("90%"),
  }
});

// const mapDispatchToProps = dispatch => {
//   let actions = bindActionCreators({setHouseRules})
//   return {...actions, dispatch}
// }

// export default connect(null,mapDispatchToProps)(HouseRules)
export default connect()(HouseRules)

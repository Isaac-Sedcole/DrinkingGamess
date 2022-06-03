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

  const [currentRules, setCurrentRules] = useState([])
  const [fullHouseRules, setFullHouseRules] = useState([])
  const [showHouseRuleModal, setShowHouseRuleModal] = useState(false)
  const [currentHouseRule, setCurrentHouseRule] = useState({})
   

  useEffect(() => {
    setCurrentRules(props.houseRules)
    setFullHouseRules(houseRulesList.houseRules.map(rule => {
      return rule
    }))
    if (showHouseRuleModal) {
      setShowHouseRuleModal(!showHouseRuleModal)
    }
  }, [])

  useEffect(()=>{
    props.dispatch(setHouseRules(currentRules))
  }, [currentRules])

  const handleCheckBox = (index, addedRule) => {
    if (showHouseRuleModal) {
      setShowHouseRuleModal(!showHouseRuleModal)
    }
    const rules = [...fullHouseRules]
    rules[index].checked = !rules[index].checked
    setFullHouseRules(rules)

    setCurrentRules(currentRulers => {
      let newArr = currentRulers.filter(rule => {
        return addedRule.id != rule.id
      })
      return newArr.length == currentRules.length
      ? [...newArr, addedRule]
      : [...newArr]
    })


    // props.dispatch(setHouseRules(currentRules))
  }

  const activateShowHouseRuleModal = (houseRule) => {
    let ruleDescription = fullHouseRules.filter(rule => { return houseRule.id == rule.id })
    setCurrentHouseRule(ruleDescription[0])
    setShowHouseRuleModal(true) 
  }

  return (
    <>
      <ScrollView style={[styles.scrollViewCont]}>
        <View style={[styles.container, {
          alignItems: 'center'
        }]}>
          <Text style={[styles.titleText]}>House Rules</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>

            {fullHouseRules.map(rule => {
              return (
                <View key={rule.id} style={[{ justifyContent: "center" }]}>
                  <Card style={[styles.cardContainer]}>
                    <View style={[styles.cardTitle, {flexWrap: "wrap", flexDirection: "column"}]}>
                      <Card.Title title={<CheckBox label={rule.name} status={fullHouseRules[rule.id - 1].checked ? "checked" : "unchecked"} onPress={() => handleCheckBox(rule.id - 1, rule)}></CheckBox>} />
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
    height: hp("15%"),
    justifyContent: 'center',
    paddingHorizontal: wp('2%')
  },
  cardTitle: {
    fontSize: wp("1%"),
    justifyContent: 'center'
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
  subText: {
    fontFamily: "sans-serif-light",
    fontSize: wp("5%"),
    fontWeight: "500",
    color: "#008B8B"
  }
});

//NEED TO REDUCE FONT SIZE OF CARD TITLE OR EXPAND THE AREA IT CAN TAKE TO DISPLAY THE RULE NAME IN TEXT

// const mapDispatchToProps = dispatch => {
//   let actions = bindActionCreators({setHouseRules})
//   return {...actions, dispatch}
// }
const mapStateToProps = (globalState) => {
  return {
    houseRules: globalState.houseRules
  }
}

// export default connect(null,mapDispatchToProps)(HouseRules)
export default connect(mapStateToProps)(HouseRules)

import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import gamesList from '../data/gamesList'


function ShowKingsCupCustomRules(props) {

  // let rule = route.params.rule
  // console.log(rule)
  //   const resetModal = () => {
  //     props.dispatch(setShowPersonModal(!props.showPersonModal))
  //   }
  const redirect = () => {
    props.navigation.goBack()
  }

  let ruleDescObj = gamesList.games[0].ruleDescription
  let customRules = gamesList.games[0].customRulesData
  const customRulesExtracted = Object.keys(customRules).map(key => <option value={key}>{customRules[key]}</option>)
  const rulesDescription = Object.keys(ruleDescObj).map(key => <option value={key}>{ruleDescObj[key]}</option>)
  console.log(customRulesExtracted)
  


  return (
    <>
      <View style={{ padding: wp("5%"), flex: 1 }}>
        <View style={{ alignItems: "center" }}>

          <View>
            <Text style={[styles.titleText]}>ya</Text>
          </View>
          <View style={{ paddingLeft: wp("1%") }}>

            <Text style={[styles.subText]}>okay</Text>
          </View>

        </View>
        <View style={{paddingTop: wp("3%")}}>
          <Button onPress={() => redirect()} title="OK!" />
        </View>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "sans-serif",
    fontSize: wp("8%"),
    color: "#2F4F4F",
    fontWeight: "600",
    // textShadow: "1px 1px black"
  },
  subText: {
    fontFamily: "sans-serif-light",
    fontSize: wp("5%"),
    fontWeight: "500",
    color: "#008B8B"
  }
})

export default ShowKingsCupCustomRules
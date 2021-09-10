import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'




function ShowRuleModal({ route, navigation }, props) {

  // const [isActive, setActive] = useState(true)

  let rule = ""
  let newRuleName = ""


  rule = route.params.rule
  let ruleName = route.params.rule[0].props.value
  newRuleName = ruleName.replace(/([A-Z])(?=)/g, " $1")
  newRuleName = newRuleName[0].toUpperCase() + newRuleName.substring(1)


  // console.log(rule)

  //   const resetModal = () => {
  //     props.dispatch(setShowPersonModal(!props.showPersonModal))
  //   }
  const redirect = () => {
    navigation.goBack()
  }


  return (
    <>

      <View style={{ padding: wp("5%"), flex: 1 }}>
        <View style={{ alignItems: "center" }}>

          <View>
            <Text style={[styles.titleText]}>{newRuleName}:</Text>
          </View>
          <View style={{paddingLeft: wp("1%"), flexWrap: "wrap", flexDirection: "row" }}>

            <Text style={[styles.subText]}>{rule}</Text>
          </View>

        </View>
        <View style={{ paddingTop: wp("3%") }}>
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

export default ShowRuleModal
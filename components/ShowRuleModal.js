import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'




function ShowRuleModal({ route, navigation }, props) {

  // const [isActive, setActive] = useState(true)

  // const[newRuleName, setNewRuleName] = useState("")

  // useEffect(()=> {
  //   console.log(route.params.rule)
  //   let ruleName = route.params.rule[0].props.value
  //   ruleName = ruleName.replace(/([A-Z])(?=)/g, " $1")
  //   ruleName = ruleName[0].toUpperCase() + ruleName.substring(1)
  //   setNewRuleName(ruleName)
  // },[])

  const redirect = () => {
    navigation.goBack()
  }

  // newRuleName
  // route.params.rule
  return (
    <>
    <View style={{ padding: wp("5%"), flex: 1 }}>
        <View style={{ alignItems: "center" }}>

          <View>
            <Text style={[styles.titleText]}>{route.params.rule.name}:</Text>
          </View>
          <View style={{ paddingLeft: wp("1%") }}>

            <Text style={[styles.subText]}>{route.params.rule.desc}</Text>
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
  },
  subText: {
    fontFamily: "sans-serif-light",
    fontSize: wp("5%"),
    fontWeight: "500",
    color: "#008B8B"
  }
})

export default ShowRuleModal
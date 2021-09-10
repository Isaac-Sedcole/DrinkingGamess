import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'




function ShowHouseRuleModal({ route, navigation }, props) {

  let rule = route.params.rule
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
            <Text style={[styles.titleText]}>{rule.name}:</Text>
          </View>
          <View style={{ paddingLeft: wp("1%") }}>

            <Text style={[styles.subText]}>{rule.description}</Text>
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

export default ShowHouseRuleModal
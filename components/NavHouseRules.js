import { connect } from "react-redux"
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, Text, View, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


function NavHouseRules(props) {

  if (props.houseRules.length > 0) {
    return (
      <View style={[styles.container, {
        flexDirection: "row",
        alignItems: 'center'
      }]}>
        <View style={[styles.backButton]}>
          <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
        </View>
        <View style={[styles.houseRulesMain]}>
          <Icon.Button onPress={() => props.navigation.navigate("House rules")} >Click here to add some house rules!</Icon.Button>
        </View>
        <View styles={[styles.cardHousing]}>
          <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
            {props.houseRules.map(rule => {
              return (
                <View key={rule.id} style={[styles.houseRulesNav]}>
                  {rule.checked && <Icon.Button backgroundColor="green" onPress={() => props.navigation.navigate("House rules")}>{rule.name}</Icon.Button>}
                </View>
              )
            })}
          </View>
        </View>
      </View>
    )
  } else {


    return (
      <View style={[styles.container, {
        flexDirection: "row",
        alignItems: 'center'
      }]}>
        <View style={[styles.backButton]}>
          <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
        </View>
        <View style={[styles.houseRulesMain]}>
          <Icon.Button onPress={() => props.navigation.navigate("House rules")} size={20} >Click here to add some house rules!</Icon.Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    width: wp("10%")
  },
  houseRulesNav: {
    justifyContent: "center",
    padding: 3,
    width: wp("25%")
  },
  cardHousing: {
    marginLeft: 5,
    width: wp("45%"),
    height: hp("10%")
  },
  houseRulesMain: {
    padding: 5,
    justifyContent: "center",
    width: wp("28%"),
    height: hp("15%")
  }
});

const mapStateToProps = (globalState) => {
  return {
    houseRules: globalState.houseRules
  }
}


export default connect(mapStateToProps)(NavHouseRules)
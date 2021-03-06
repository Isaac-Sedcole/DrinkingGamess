import { connect } from "react-redux"
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppButton from './AppButton'

function JustShowHouseRules(props) {

  
  const [displayHRules, setDisplayHRules] = useState(false)
  const [currentHouseRules, setCurrentHouseRules] = useState([])
  const [moreThanThree, setMoreThanThree] = useState(false)

  useEffect(()=> {
    setMoreThanThree(props.houseRules.length > 3)
    setCurrentHouseRules(props.houseRules)
  },[props.houseRules])

  useEffect(()=> {
    let list = props.houseRules.filter(rule => { return rule.checked })
    if(list.length > 0) {
      setDisplayHRules(true)
    } else {
      setDisplayHRules(false)
    }
  },[props.houseRules])
  // const [navBarHeight, setNavBarHeight] = useState(hp("15%"))
  
  if (displayHRules) {

    if(moreThanThree){
      return (
      <View style={[styles.containerMultiMoreThanThree, {
        flexDirection: "row",
        alignItems: "center",
      }]}>
        {/* <View style={[styles.houseRulesMainAppear]}>
          <Icon.Button onPress={() => props.navigation.navigate("House rules")}>Click here to add some house rules!</Icon.Button>
        </View> */}
        <View style={[styles.cardHousing]}>
          <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
            {currentHouseRules.map(rule => {
              return (
                <View key={rule.id} style={[styles.houseRulesNav]}>
                  {rule.checked && <Icon.Button backgroundColor="#ff6103" onPress={() => props.navigation.navigate("House rules")}>{rule.name}</Icon.Button>}
                </View>
              )
            })}
          </View>
          <View style={[styles.houseRulesMain]}>
            <Icon.Button onPress={() => props.navigation.navigate("Punishment Wheel")} >Random Punishment</Icon.Button>
          </View>
        </View>
      </View>
    
  )
    } else {
      return (
      <View style={[styles.containerMulti, {
        flexDirection: "row",
        alignItems: "center",
      }]}>
        {/* <View style={[styles.houseRulesMainAppear]}>
          <Icon.Button onPress={() => props.navigation.navigate("House rules")}>Click here to add some house rules!</Icon.Button>
        </View> */}
        <View style={[styles.cardHousing]}>
          <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
            {currentHouseRules.map(rule => {
              return (
                <View key={rule.id} style={[styles.houseRulesNav]}>
                  {rule.checked && <Icon.Button backgroundColor="#ff6103" onPress={() => props.navigation.navigate("House rules")}>{rule.name}</Icon.Button>}
                </View>
              )
            })}
          </View>
          <View style={[styles.houseRulesMain]}>
            <Icon.Button onPress={() => props.navigation.navigate("Punishment Wheel")} >Random Punishment</Icon.Button>
          </View>
        </View>
      </View>
    
  )
    }
      
  } else {
    return (
        <View style={[styles.containerSingle, {
          flexDirection: "column",
          alignItems: "center"
        }]}>
          <View style={[styles.houseRulesMain]}>
            <Icon.Button onPress={() => props.navigation.navigate("House rules")} >Click here to add some house rules!</Icon.Button>
          </View>
          <View style={[styles.houseRulesMain]}>
            <Icon.Button onPress={() => props.navigation.navigate("Punishment Wheel")} >Random Punishment</Icon.Button>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  containerSingle: {
    flex: 1,
    marginTop: hp("5%"),
    marginHorizontal: wp("5%"),
    height: hp("50%")
  },
  containerMulti: {
    flex: 1,
    marginTop: hp("9%"),
    marginLeft: wp("5%"),
    height: hp("50%")
  },
  containerMultiMoreThanThree: {
    flex: 1,
    marginTop: hp("9%"),
    paddingBottom: hp("7%"),
    marginLeft: wp("5%"),
    height: hp("50%")
  },
  scrollViewCont:{
    flex: 1
  },
  houseRulesNav: {
    padding: 3,
    // width: wp("22.5%")
  },
  cardHousing: {
    marginLeft: 5,
    width: wp("90%"),
    height: hp("10%")
  },
  houseRulesMain: {
    justifyContent: "center",
    width: wp("90%"),
    height: hp("7%")
  },
  houseRulesMainAppear: {
    justifyContent: "center",
    width: wp("20%"),
    height: hp("20%")
  }
});



const mapStateToProps = (globalState) => {
  return {
    houseRules: globalState.houseRules
  }
}

export default connect(mapStateToProps)(JustShowHouseRules)
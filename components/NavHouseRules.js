import { connect } from "react-redux"
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


function NavHouseRules(props) {

  

  const [displayHRules, setDisplayHRules] = useState(false)

  const [moreThanThree, setMoreThanThree] = useState(false)

  useEffect(()=> {
    setMoreThanThree(props.houseRules.length > 3)
  },[props.houseRules])

  useEffect(()=> {
    let list = props.houseRules.filter(rule => { return rule.checked })
    if(list.length > 0) {
      setDisplayHRules(true)
    } else {
      setDisplayHRules(false)
    }
  },[props.houseRules])

  // (props.houseRules.length>3) : [styles.containerMulti ? [styles.containerSingle

  if (displayHRules) {

    if(moreThanThree){
      return (
        <View style={[styles.containerMultiMoreThanThree, {
          flexDirection: "row",
          alignItems: 'center',
        }]}>
          <View style={[styles.backButton]}>
            <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
          </View>
          <View style={[styles.cardHousing]}>
            <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
              {props.houseRules.map(rule => {
                return (
                  <View key={rule.id} style={styles.houseRulesNav}>
                    {rule.checked && <Icon.Button backgroundColor="#ff6103" onPress={() => props.navigation.navigate("House rules")}>{rule.name}</Icon.Button>}
                  </View>
                )
              })}
            </View>
          </View>
        </View>
      
    )
    } else {
      return (
        <View style={[styles.containerMulti, {
          flexDirection: "row",
          alignItems: 'center',
        }]}>
          <View style={[styles.backButton]}>
            <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
          </View>
          <View style={[styles.cardHousing]}>
            <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
              {props.houseRules.map(rule => {
                return (
                  <View key={rule.id} style={styles.houseRulesNav}>
                    {rule.checked && <Icon.Button backgroundColor="#ff6103" onPress={() => props.navigation.navigate("House rules")}>{rule.name}</Icon.Button>}
                  </View>
                )
              })}
            </View>
          </View>
        </View>
      
    )
    }

   
  } else {
    return (
      

      <View style={[styles.containerSingle, {
        flexDirection: "row",
        alignItems: 'center'
      }]}>
        <View style={[styles.backButton]}>
          <Icon.Button onPress={() => props.navigation.goBack() } name="arrow-left"/>
        </View>
        <View style={[styles.houseRulesMain]}>
          <Icon.Button onPress={() => props.navigation.navigate("House rules")} >Click here to add some house rules!</Icon.Button>
        </View>
      </View>
        
    )
  }
}

const styles = StyleSheet.create({
  containerSingle: {
    flex: 1,
    marginTop: hp("7%"),
    marginLeft: wp("5%"),
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
  backButton: {
    marginTop: hp("5%"),
    width: wp("10%"),
    height: hp("10%")
  },
  houseRulesNav: {
    padding: 3,
    // width: wp("25%")
  },
  cardHousing: {
    marginLeft: 5,
    // width: wp("77%"),
    height: hp("10%")
  },
  houseRulesMain: {
    marginLeft: 5,
    justifyContent: "center",
    width: wp("80%"),
    height: hp("15%")
  }
});

const mapStateToProps = (globalState) => {
  return {
    houseRules: globalState.houseRules
  }
}


export default connect(mapStateToProps)(NavHouseRules)
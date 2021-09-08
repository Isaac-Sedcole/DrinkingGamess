import { connect } from "react-redux"
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


function JustShowHouseRules(props) {

  
  
  // const [navBarHeight, setNavBarHeight] = useState(hp("15%"))
  
  if (props.houseRules.length > 0) {


    return (
      

        <View style={[styles.containerMulti, {
          flexDirection: "row",
          alignItems: "center",
        }]}>
          <View style={[styles.houseRulesMain]}>
            <Icon.Button onPress={() => props.navigation.navigate("House rules")}>Click here to add some house rules!</Icon.Button>
          </View>
          <View style={[styles.cardHousing]}>
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
        <View style={[styles.containerSingle, {
          flexDirection: "row",
          alignItems: "center"
        }]}>
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
    paddingTop: hp("7%"),
    paddingBottom: hp("5%"),
    padding: wp("5%"),
    height: hp("50%")
  },
  containerMulti: {
    flex: 1,
    paddingVertical: hp("9%"),
    padding: wp("5%"),
    height: hp("50%")
  },
  scrollViewCont:{
    flex: 1
  },
  houseRulesNav: {
    padding: 3,
    width: wp("20%")
  },
  cardHousing: {
    marginLeft: 5,
    width: wp("62%"),
    height: hp("10%")
  },
  houseRulesMain: {
    justifyContent: "center",
    width: wp("90%"),
    height: hp("20%")
  }
});



const mapStateToProps = (globalState) => {
  return {
    houseRules: globalState.houseRules
  }
}

export default connect(mapStateToProps)(JustShowHouseRules)
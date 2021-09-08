import { connect } from "react-redux"
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


function JustShowHouseRules(props) {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:65,
      padding: 20,
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
      width: wp("33%"),
      height: hp("20%")
    }
  });
  
  // const [navBarHeight, setNavBarHeight] = useState(hp("15%"))
  
  if (props.houseRules.length > 0) {


    return (
      

        <View style={[styles.container, {
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
        <View style={[styles.container, {
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



const mapStateToProps = (globalState) => {
  return {
    houseRules: globalState.houseRules
  }
}

export default connect(mapStateToProps)(JustShowHouseRules)
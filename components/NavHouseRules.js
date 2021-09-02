import { connect } from "react-redux"
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, Text, View, Button } from 'react-native';



function NavHouseRules(props) {
  
    let backWidth = 35
    let houseRulesWidth = 125
    let contWidth = 175
  
    if (props.houseRules.length > 0) {
      return (
        <View style={[styles.container, {
          flexDirection: "row",
          alignItems: 'center'
        }]}>
          <View style={{ width: backWidth }}>
            <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
          </View>
          <View style={{ width: contWidth }}>
            <Icon.Button onPress={() => props.navigation.navigate("House rules")} size={20} >Click here to add some house rules!</Icon.Button>
          </View>
          <View style={{flexWrap: "wrap"}}>
            {props.houseRules.map(rule => {
              return (
                <View key={rule.id} style={{ width: houseRulesWidth }}>
                  {rule.checked && <Icon.Button backgroundColor="green" onPress={() => props.navigation.navigate("House rules")}>{rule.name}</Icon.Button>}
                </View>
              )
            })}
            </View>
        </View>
      )
    } else {
  
  
      return (
        <View style={[styles.container, {
          flexDirection: "row",
          alignItems: 'center'
        }]}>
          <View style={{ width: backWidth }}>
            <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
          </View>
          <View style={{ width: contWidth }}>
            <Icon.Button onPress={() => props.navigation.navigate("House rules")} size={20} >Click here to add some house rules!</Icon.Button>
          </View>
          {/* <View style={{ flex: 27 }}></View> */}
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

  const mapStateToProps = (globalState) => {
    return {
        houseRules: globalState.houseRules
    }
  }
  

  export default connect(mapStateToProps)(NavHouseRules)
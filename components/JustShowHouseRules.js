import { connect } from "react-redux"
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, Text, View, Button } from 'react-native';



function JustShowHouseRules(props) {
    // console.log(navigation)
    // const [navigateToHouseRules, setNavigateToHouseRules] = useState(false)
  
    // const handleNavigation = () => {
    //   setNavigateToHouseRules(!navigateToHouseRules)
    // }
    return (
      <View style={[styles.container, {
        flexDirection: "row",
        alignItems: "center"
      }]}>
        <View style={{ flex: 8 }}>
          <Icon.Button onPress={() => props.navigation.navigate("House rules")} size={20} >Click here to add some house rules!</Icon.Button>
        </View>
        <View style={{ flex: 28 }}></View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

  export default connect()(JustShowHouseRules)
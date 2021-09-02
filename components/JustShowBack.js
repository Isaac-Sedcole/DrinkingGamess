import { connect } from "react-redux"
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, Text, View, Button } from 'react-native';



function JustShowBack(props) {
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
        <View style={{ flex: 1 }}>
          <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
        </View>
        <View style={{ flex: 35 }}></View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });
 

  export default connect()(JustShowBack)
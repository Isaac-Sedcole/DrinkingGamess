import { connect } from "react-redux"
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, Text, View, Button } from 'react-native';



function NavHouseRules(props) {
    // console.log(navigation)
    // const [navigateToHouseRules, setNavigateToHouseRules] = useState(false)
  
    // const handleNavigation = () => {
    //   setNavigateToHouseRules(!navigateToHouseRules)
    // }

    console.log(props.houseRules)
  
  
    if (props.houseRules != null) {

      const rules = Object.keys(props.houseRules).map(key => <option value={key}>{props.houseRules[key]}</option>)

      return (
        <View style={[styles.container, {
          flexDirection: "row",
          alignItems: 'center'
        }]}>
          <View style={{ flex: 1 }}>
            <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
          </View>
          <View style={{ flex: 8 }}>
            <Icon.Button onPress={() => props.navigation.navigate("House rules")} size={20} >Click here to add some house rules!</Icon.Button>
          </View>
          {/* <View style={{ flex: 27 }}></View> */}
            {rules.map(rule => {
                return (
                <View style={{ flex: 27 }}>
                    <Icon.Button onPress={() => props.navigation.navigate("House rules")}>{rule.props.value} : {rule.props.children}</Icon.Button>
                </View>
              )
            })}
        </View>
      )
    } else {
  
  
      return (
        <View style={[styles.container, {
          flexDirection: "row",
          alignItems: 'center'
        }]}>
          <View style={{ flex: 1 }}>
            <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
          </View>
          <View style={{ flex: 8 }}>
            <Icon.Button onPress={() => props.navigation.navigate("House rules")} size={20} >Click here to add some house rules!</Icon.Button>
          </View>
          <View style={{ flex: 27 }}></View>
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
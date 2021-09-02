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
    // console.log(props.houseRules)

    if (props.houseRules.length > 0) {

        return (
            <View style={[styles.container, {
                flexDirection: "row",
                alignItems: "center"
            }]}>
                <View style={{ flex: 8 }}>
                    <Icon.Button onPress={() => props.navigation.navigate("House rules")} size={20} >Click here to add some house rules!</Icon.Button>
                </View>
                    {props.houseRules.map(rule => {
                        return (
                            <View key={rule.id} style={{ flex: 28 }}>
                                <Icon.Button backgroundColor="green" onPress={() => props.navigation.navigate("House rules")}>{rule.name}</Icon.Button>
                            </View>
                        )
                    })}
            </View>
        )
    } else {
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

export default connect(mapStateToProps)(JustShowHouseRules)
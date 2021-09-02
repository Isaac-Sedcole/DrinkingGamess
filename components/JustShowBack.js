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


    if (props.houseRules.length > 0) {

        return (
            <View style={[styles.container, {
                flexDirection: "row",
                alignItems: "center"
            }]}>
                <View style={{ flex: 1 }}>
                    <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
                </View>
                {props.houseRules.map(rule => {
                    return (
                        <View key={rule.id} style={{ flex: 35 }}>
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
                <View style={{ flex: 1 }}>
                    <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
                </View>
                <View style={{ flex: 35 }}></View>
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

export default connect(mapStateToProps)(JustShowBack)
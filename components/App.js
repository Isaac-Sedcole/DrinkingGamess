import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Games from './Games'
import Game from './Game';
import HouseRules from './HouseRules';
import ShowRuleModal from './ShowRuleModal';
import ShowHouseRuleModal from './ShowHouseRuleModal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Navigator from '../routes/homeStack'

const Stack = createStackNavigator()


export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Games" component={Games}/>
            <Stack.Screen name="House rules" component={HouseRules}/>
            <Stack.Screen name="Selected game" component={Game}/>
            <Stack.Screen name="Showing a rule" component={ShowRuleModal}/>
            <Stack.Screen name="Showing a house rule" component={ShowHouseRuleModal}/>
          </Stack.Navigator>
        </NavigationContainer>
  );
}
{/* <View style={styles.container}>

  <StatusBar style="auto" />
</View> */}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

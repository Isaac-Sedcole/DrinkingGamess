import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Games from './Games'
import Game from './Game';
import HouseRules from './HouseRules';
import ShowRuleModal from './ShowRuleModal';
import ShowHouseRuleModal from './ShowHouseRuleModal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Navigator from '../routes/homeStack'


const Stack = createStackNavigator()

function NavHouseRules ({navigation}) {
  // console.log(navigation)
  // const [navigateToHouseRules, setNavigateToHouseRules] = useState(false)

  // const handleNavigation = () => {
  //   setNavigateToHouseRules(!navigateToHouseRules)
  // }

  return (
    <>
    <Button onPress={() => navigation.goBack()} title="back"/>
    <Button onPress={() => navigation.navigate("House rules")} title="Click here to add some house rules!"/>
    {/* {navigateToHouseRules && navigation.navigate("House rules")} */}
    </>
  )
}

function JustShowBack ({navigation}) {
  return (
    <>
    <Button onPress={() => navigation.goBack()} title="back"/>
    </>
  )
} 

function JustShowHouseRules({navigation}) {
  return (
    <>
    <Button onPress={() => navigation.navigate("House rules")} title="Click here to add some house rules!"/>
    </>
  )
}


export default function App() {

  return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            header: props => <NavHouseRules {...props} />
          }}
          >
            <Stack.Screen options={{header: props => <JustShowHouseRules {...props}/>}} name="Games" component={Games}/>
            <Stack.Screen options={{header: props => <JustShowBack {...props}/>}} name="House rules" component={HouseRules}/>
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

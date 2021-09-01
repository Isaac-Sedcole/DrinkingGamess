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
import Icon from 'react-native-vector-icons/FontAwesome5'
// import Navigator from '../routes/homeStack'
// const AnimatedIcon = Animated.createAnimatedComponent(Icon)


// You will normally use a combination of flexDirection, alignItems, and justifyContent to achieve the right layout.

const Stack = createStackNavigator()

function NavHouseRules ({navigation}) {
  // console.log(navigation)
  // const [navigateToHouseRules, setNavigateToHouseRules] = useState(false)

  // const handleNavigation = () => {
  //   setNavigateToHouseRules(!navigateToHouseRules)
  // }

  return (
    <View style={[styles.container, {
      flexDirection: "row",
      alignItems: 'center'
    }]}>
      <View style={{ flex : 1}}>
        <Icon.Button onPress={() => navigation.goBack()} name="arrow-left"/>
      </View>
      <View style={{ flex : 6}}>
        <Icon.Button onPress={() => navigation.navigate("House rules")} size={20} >Click here to add some house rules!</Icon.Button>
      </View>
      <View style={{ flex : 20}}></View>
    </View>
  )
}

function JustShowBack ({navigation}) {
  return (
    <>
    <Icon.Button onPress={() => navigation.goBack()} name="arrow-left"/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

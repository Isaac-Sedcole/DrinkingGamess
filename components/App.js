import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Games from './Games'
import Game from './Game';
import HouseRules from './HouseRules';
import ShowRuleModal from './ShowRuleModal';
import ShowHouseRuleModal from './ShowHouseRuleModal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'
// import Navigator from '../routes/homeStack'
// const AnimatedIcon = Animated.createAnimatedComponent(Icon)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk)
))

// You will normally use a combination of flexDirection, alignItems, and justifyContent to achieve the right layout.

const Stack = createStackNavigator()

function NavHouseRules({ navigation }) {
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
      <View style={{ flex: 1 }}>
        <Icon.Button onPress={() => navigation.goBack()} name="arrow-left" />
      </View>
      <View style={{ flex: 8 }}>
        <Icon.Button onPress={() => navigation.navigate("House rules")} size={20} >Click here to add some house rules!</Icon.Button>
      </View>
      <View style={{ flex: 27 }}></View>
    </View>
  )
}

function JustShowBack({ navigation }) {
  return (
    <View style={[styles.container, {
      flexDirection: "row",
      alignItems: "center"
    }]}>
      <View style={{ flex: 1 }}>
        <Icon.Button onPress={() => navigation.goBack()} name="arrow-left" />
      </View>
      <View style={{ flex: 35 }}></View>
    </View>
  )
}

function JustShowHouseRules({ navigation }) {
  return (
    <View style={[styles.container, {
      flexDirection: "row",
      alignItems: "center"
    }]}>
      <View style={{ flex: 8 }}>
        <Icon.Button onPress={() => navigation.navigate("House rules")} size={20} >Click here to add some house rules!</Icon.Button>
      </View>
      <View style={{ flex: 28 }}></View>
    </View>
  )
}


export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          header: props => <NavHouseRules {...props} />
        }
        }
        >
          <Stack.Screen options={{ header: props => <JustShowHouseRules {...props} /> }} name="Games" component={Games} />
          <Stack.Screen options={{ header: props => <JustShowBack {...props} /> }} name="House rules" component={HouseRules} />
          <Stack.Screen name="Selected game" component={Game} />
          <Stack.Screen name="Showing a rule" component={ShowRuleModal} />
          <Stack.Screen name="Showing a house rule" component={ShowHouseRuleModal} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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




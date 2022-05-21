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
import NavHouseRules from './NavHouseRules';
import JustShowBack from './JustShowBack';
import JustShowHouseRules from './JustShowHouseRules';
import ShowKingsCupCustomRules from './ShowKingsCupCustomRules'
import Horses from './Horses';
import PlayHorses from './PlayHorses'
import KingsCup from './KingsCup';
import BeerPong from './BeerPong'
import CheersGovernor from './CheersGovernor'
import BoozeOrNoBooze from './BoozeOrNoBooze';

import reducers from '../reducers'
import { startClock } from 'react-native-reanimated';
// import Navigator from '../routes/homeStack'
// const AnimatedIcon = Animated.createAnimatedComponent(Icon)


// You will normally use a combination of flexDirection, alignItems, and justifyContent to achieve the right layout.

const Stack = createStackNavigator()
// const store = createStore(reducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk)
))

function App() {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          header: props => <NavHouseRules {...props} />
        }}
        >
          <Stack.Screen options={{ header: props => <JustShowHouseRules {...props} /> }} name="Games" component={Games} />
          <Stack.Screen options={{ header: props => <JustShowBack {...props} /> }} name="House rules" component={HouseRules} />
          <Stack.Screen name="Selected game" component={Game} />
          <Stack.Screen name="Show kings cup custom rules" component={ShowKingsCupCustomRules} />
          <Stack.Screen name="Showing a rule" component={ShowRuleModal} />
          <Stack.Screen name="Showing a house rule" component={ShowHouseRuleModal} />
          <Stack.Screen name="Horses" component={Horses}/>
          <Stack.Screen name="Play horses" component={PlayHorses}/>
          <Stack.Screen name="Kings Cup" component={KingsCup} />
          <Stack.Screen name="Beer Pong" component={BeerPong} />
          <Stack.Screen name="Cheers Governor" component={CheersGovernor} />
          <Stack.Screen name="Booze or no Booze" component={BoozeOrNoBooze} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

}


export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });




import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Games from './components/Games'
import Game from './components/Game';
import HouseRules from './components/HouseRules';
import ShowRuleModal from './components/ShowRuleModal';
import ShowHouseRuleModal from './components/ShowHouseRuleModal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import NavHouseRules from './components/NavHouseRules';
import JustShowBack from './components/JustShowBack';
import JustShowHouseRules from './components/JustShowHouseRules';
import ShowKingsCupCustomRules from './components/ShowKingsCupCustomRules'
import Horses from './components/Horses';
import PlayHorses from './components/PlayHorses'
import KingsCup from './components/KingsCup';
import BeerPong from './components/BeerPong'
import CheersGovernor from './components/CheersGovernor'
import BoozeOrNoBooze from './components/BoozeOrNoBooze';
import PunishmentWheel from './components/PunishmentWheel';
import NoShowPunishment from './components/NoShowPunishment'
import PlayCheersGovernor from './components/PlayCheersGovernor'

import reducers from './reducers'
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
          <Stack.Screen options={{ header: props => <NoShowPunishment {...props} /> }} name="Punishment Wheel" component={PunishmentWheel} />
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
          <Stack.Screen name="Play Cheers Governor" component={PlayCheersGovernor} />
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




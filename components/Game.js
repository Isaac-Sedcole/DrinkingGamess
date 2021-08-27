import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

function Game({navigation}, props) {
  return (
    <Text>Hi! I'm a singular game, {props.game.id}</Text>
    
  )
}

export default Game


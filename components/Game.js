import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

function Game({route, navigation}) {
  return (
    <>
    <Text>Hi! welcome to {route.params.game.name}</Text>
    {console.log(route.params.game)}
    </>
  )
}

export default Game


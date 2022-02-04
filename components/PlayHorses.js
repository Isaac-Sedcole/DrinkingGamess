import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { Card } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppButton from "./AppButton"


function PlayHorses(props) {
  return(
    <>
    Hello world
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp("5%"),
    paddingBottom: hp("2%"),
    // marginTop: hp("2.5%")
  },
})

export default PlayHorses
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { Card } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppButton from "./AppButton"
import { Audio } from 'expo-av'


function PlayHorses(props) {

  const [sound, setSound] = useState()
  const [bets, setBets] = useState({})
  const [turnMusicOff, setTurnMusicOff] = useState(false)

  async function playElevatorSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../soundAssets/ElevatorMusic.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

    async function playHorseSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
         require('../soundAssets/horseMusic.mp3')
      );
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync(); }
  
  useEffect(()=> {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  },[sound,turnMusicOff])    

  const stopMusic = () => {
    setTurnMusicOff(!turnMusicOff)
  }
  

  return (
    <>
      <ScrollView style={[styles.scrollViewCont]}>
        <View style={[styles.container, {
          alignItems: 'center'
        }]}>

          -- step 1 enter how many people are playing
          -- step 2 enter their name and bet
          -- hit confirm 
          -- a button will then appear where you can choose to reset bets or reset everything
          Place bets -- requires a name a bet amount and the ability to add more people - and a way to reset the bets (with and without removing names)
          
          <AppButton onPress={() => playElevatorSound()} title="intermission music"/>
          <AppButton onPress={() => playHorseSound()} title="horse music"/>
          <AppButton onPress={() => stopMusic()} title="stop music"/>

          Play game for me

        </View>
      </ScrollView>
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
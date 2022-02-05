import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { Card } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppButton from "./AppButton"
import horseMusic from '../soundAssets/horseMusic.mp3'
import elevatorMusic from '../soundAssets/ElevatorMusic.mp3'
import { Audio } from 'expo-av'


function PlayHorses(props) {

  const [sound, setSound] = useState()
  const [bets, setBets] = useState({})
  const [musicPlaying, setMusicPlaying] = useState(false)

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
  },[sound])    

  const stopMusic = () => {
    
    setMusicPlaying(false)
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

          -- starting one music will stop the other
          Intermission music -- has a start label until pressed then changes to stop
          <AppButton onPress={() => playElevatorSound()} title="intermission music"/>
          <AppButton onPress={() => playHorseSound()} title="horse music"/>
          <AppButton onPress={() => stopMusic()} title="stop music"/>
          Horse music -- has a start label until pressed then changes to stop -- after stopping it resets to beginning

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
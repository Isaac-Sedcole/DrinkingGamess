import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native'
import { Card } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppButton from "./AppButton"
import { Audio } from 'expo-av'
import { useForm, Controller } from 'react-hook-form'


function PlayHorses(props) {

  const [sound, setSound] = useState()
  const [bets, setBets] = useState({})
  const [turnMusicOff, setTurnMusicOff] = useState(false)

  const [onePressed, setOnePressed] = useState(false)
  const [twoPressed, setTwoPressed] = useState(false)
  const [fourPressed, setFourPressed] = useState(false)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      bet: ''
    }
  })
  const onSubmit = data => console.log(data)

  async function playElevatorSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../soundAssets/ElevatorMusic.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  async function playHorseSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../soundAssets/horseMusic.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound, turnMusicOff])

  const stopMusic = () => {
    setTurnMusicOff(!turnMusicOff)
  }


  return (
    <>
      <ScrollView style={[styles.scrollViewCont]}>
        <View style={[styles.container, {
          alignItems: 'center'
        }]}>
          <View style={{ flex: 1, flexDirection: 'row', width: wp('85%') }}>
            <View style={{width: wp('28.33%')}}>
              <AppButton title="X1" onPress={() => setOnePressed(!onePressed)} buttonColour={onePressed ? '#2196F3' : '#216bf3'} />
            </View>
            <View style={{width: wp('28.33%')}}>
              <AppButton title="X2" onPress={() => setTwoPressed(!twoPressed)} buttonColour={twoPressed ? '#2196F3' : '#216bf3'} />
            </View>
            <View style={{width: wp('28.33%')}}>
              <AppButton title="X4" onPress={() => setFourPressed(!fourPressed)} buttonColour={fourPressed ? '#2196F3' : '#216bf3'} />
            </View>
          </View>
          <Card style={[styles.formBackground]}>
            <View>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder={'Dave'}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="Dave"
              />
              {errors.name && <Text>This is required.</Text>}

              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    // selectionColor={'red'}
                    // underlineColorAndroid={'green'}
                    placeholder={'1 shot'}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                bet="1 shot"
              />

              <AppButton title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
          </Card>
          <Text>-- hit confirm -- a button will then appear where you can choose to reset bets or reset everything </Text>

          <Text>Place bets -- requires a name a bet amount and the ability to add more people - and a way to reset the bets (with and without removing names)</Text>

          <View stlye={{ justifyContent: "center" }}>
            <View style={[styles.cardContainer]}>
              <View style={[styles.cardContent]}>
                <AppButton onPress={() => playElevatorSound()} title="intermission music" />
              </View>
              <View style={[styles.cardContent]}>
                <AppButton onPress={() => playHorseSound()} title="horse music" />
              </View>
              <View style={[styles.cardContent]}>
                <AppButton onPress={() => stopMusic()} title="stop music" />
              </View>
            </View>
          </View>

          <Text>Play game for me</Text>

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
  },
  cardContainer: {
    margin: wp("1%"),
    width: wp("85%"),
    height: hp("20%"),
    alignItems: "center",
  },
  cardContent: {
    paddingVertical: wp('5%'),
    width: wp("60%"),
    height: hp("6%"),
  },
  formBackground: {
    width: wp('85%'),
    height: hp('12%')
  },
})

export default PlayHorses
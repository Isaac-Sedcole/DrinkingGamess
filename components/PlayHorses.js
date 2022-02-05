import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native'
import { Card } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppButton from "./AppButton"
import { Audio } from 'expo-av'
import { useForm, Controller } from 'react-hook-form'
import EditableLabel from 'react-inline-editing'


function PlayHorses(props) {

  const [sound, setSound] = useState()
  const [listOfBets, setListOfBets] = useState([])
  const [turnMusicOff, setTurnMusicOff] = useState(false)

  const [onePressed, setOnePressed] = useState(false)
  const [twoPressed, setTwoPressed] = useState(false)
  const [fourPressed, setFourPressed] = useState(false)

  const [currentButton, setCurrentButton] = useState("")

  const [betAmount, setBetAmount] = useState("")

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      bet: ''
    }
  })
  const onSubmit = data => {
    setListOfBets(listOfBets => {
      return [...listOfBets, { data }]
    })
  }

  const buttonHandler = (buttonName) => {
    if (buttonName == currentButton) {
      if (buttonName == "X1") {
        setOnePressed(false)
      } else if (buttonName == "X2") {
        setTwoPressed(false)
      } else {
        setFourPressed(false)
      }
    } else {
      if (buttonName == "X1") {
        setOnePressed(true)
        setTwoPressed(false)
        setFourPressed(false)
        setCurrentButton("X1")
      } else if (buttonName == "X2") {
        setOnePressed(false)
        setTwoPressed(true)
        setFourPressed(false)
        setCurrentButton("X2")
      } else {
        setOnePressed(false)
        setTwoPressed(false)
        setFourPressed(true)
        setCurrentButton("X4")
      }
    }
  }

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

  const resetList = () => {
    setListOfBets([])
  }


  return (
    <>
      <ScrollView style={[styles.scrollViewCont]}>
        <View style={[styles.container, {
          alignItems: 'center'
        }]}>
          <View style={{ flex: 1, flexDirection: 'row', width: wp('85%') }}>
            <View style={{ width: wp('28.33%') }}>
              <AppButton title="X1" onPress={() => buttonHandler("X1")} buttonColour={onePressed ? '#2196F3' : '#216bf3'} />
            </View>
            <View style={{ width: wp('28.33%') }}>
              <AppButton title="X2" onPress={() => buttonHandler("X2")} buttonColour={twoPressed ? '#2196F3' : '#216bf3'} />
            </View>
            <View style={{ width: wp('28.33%') }}>
              <AppButton title="X4" onPress={() => buttonHandler("X4")} buttonColour={fourPressed ? '#2196F3' : '#216bf3'} />
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
                name="name"
              />
              {errors.name && <Text>This is required.</Text>}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder={'1 shot'}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="bet"
              />

              <AppButton title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
          </Card>

          <View>
            <View>
              <AppButton title="Reset list" onPress={() => resetList()} />
            </View>
          </View>

          {listOfBets && listOfBets.map(bet => {
            return (
              <View style={{flex: 1, flexDirection: 'row'}} key={bet.data.name}>
                <Text>{bet.data.name}</Text>
                <Text>

                <EditableLabel
                  text={bet.data.bet}
                  inputWidth={wp('20%')}
                  inputHeight={hp('6%')}
                  inputMaxLength='20'
                  onChange={e => setBetAmount(e.target.value)}
                  />
                  </Text>
              </View>
            )
          })}

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
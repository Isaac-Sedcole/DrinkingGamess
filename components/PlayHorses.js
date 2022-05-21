import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native'
import { Card } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppButton from "./AppButton"
import { Audio } from 'expo-av'
import { useForm, Controller } from 'react-hook-form'
import EditableLabel from 'react-inline-editing'
import DropDownPicker from 'react-native-dropdown-picker'


function PlayHorses(props) {

  const [sound, setSound] = useState()
  const [turnMusicOff, setTurnMusicOff] = useState(false)

  const [onePressed, setOnePressed] = useState(false)
  const [twoPressed, setTwoPressed] = useState(false)
  const [fourPressed, setFourPressed] = useState(false)

  const [currentButton, setCurrentButton] = useState("")

  const [formValues, setFormValues] = useState([
    {name: 'Dave', openQuantity: false, valueQuantity: '4', openForm: false, valueForm: 'sip'},
    {name: 'Kate', openQuantity: false, valueQuantity: '1', openForm: false, valueForm: 'shot'}
  ])

  const [drinkQuantity, setDrinkQuantity] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
    {label: '9', value: '9'},
    {label: '10', value: '10'},
    {label: '11', value: '11'},
    {label: '12', value: '12'},
    {label: '13', value: '13'},
    {label: '14', value: '14'},
    {label: '15', value: '15'},
    {label: '16', value: '16'},
    {label: '17', value: '17'},
    {label: '18', value: '18'},
    {label: '19', value: '19'},
    {label: '20', value: '20'}
  ])
  const [drinkForm, setDrinkForm] = useState([
    {label: 'Sip', value: 'sip'},
    {label: 'Shot', value: 'shot'}
  ])

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: ''
    }
  })
  const onSubmit = data => {
    setFormValues(listOfFormValues => {
      return [...listOfFormValues, { name: data.name, openQuantity: false, valueQuantity: null, openForm: false, valueForm: null }]
    })
  }

  // useEffect(()=> {
  //   setBetAmount([...listOfBets])
  // },[listOfBets])

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
    setFormValues([])
  }

  const handleStateChange = (name, action, form) => {
    setFormValues(listOfFormValues => {
      for(let i = 0; i < formValues.length; i++) {
        if(listOfFormValues[i].name == name) {
          if(action == 'open'){
            listOfFormValues[i][form] = !listOfFormValues[i][form]
            return [...listOfFormValues]
          }else {
            listOfFormValues[i][form] = action.value
            return[...listOfFormValues]
          }
        }
      }
    }) 
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

              <AppButton title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
          </Card>

          <View>
            <View>
              <AppButton title="Reset list" onPress={() => resetList()} />
            </View>
          </View>

          {formValues && formValues.map(bet => {
            return (
              <View style={{flex: 1, flexDirection: 'row'}} key={bet.name}>
                <Text>{bet.name}</Text>
                <DropDownPicker 
                open={bet.openQuantity} //each need own open 
                value={bet.valueQuantity} // each need own value
                items={drinkQuantity} //can use same items
                setOpen={()=>handleStateChange(bet.name, 'open', 'openQuantity')}
                // setValue={()=>handleStateChange()}
                onSelectItem={(item)=> {handleStateChange(bet.name, item, 'valueQuantity')}}
                setItems={setDrinkQuantity}
              />

              <DropDownPicker 
                open={bet.openForm}
                value={bet.valueForm}
                items={drinkForm}
                setOpen={()=>handleStateChange(bet.name, 'open', 'openForm')}
                onSelectItem={(item)=> {handleStateChange(bet.name, item, 'valueForm')}}
                setItems={setDrinkForm}
              />
              </View>
            )
          })}
          <View style={{paddingBottom: hp('20%')}}>

          </View>
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
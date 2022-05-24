import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native'
import { Card } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AppButton from "./AppButton"
import { useForm, Controller } from 'react-hook-form'


function PlayCheersGovernor() {

  const [formValues, setFormValues] = useState([])

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: ''
    }
  })

  const onSubmit = data => {
    // console.log(data)
    setFormValues(listOfFormValues => {
      return [...listOfFormValues, { data }]
    })
  }

  const resetList = () => {
    // console.log(formValues)
    setFormValues([])
  }

  return (
    <>
      <ScrollView style={[styles.scrollViewCont]}>
        <View style={[styles.container, {
          alignItems: 'center'
        }]}>
          
          <Card style={[styles.formBackground]}>
            <View>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder={'Drink on 7'}
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

          <View style={{paddingVertical: hp('2%')}}>
              <AppButton title="Reset list" onPress={() => resetList()} />
          </View>
          

          {formValues && formValues.map(bet => {
            return (
              <View key={bet.data.name} style={[styles.container, {
                flexDirection: "column",
                alignItems: 'center'
              }]}>
                <Card style={[styles.gamesDisplay]}>
                  <Text>{bet.data.name}</Text>
                </Card>
              </View>
            )
          })}
          
        </View>
      </ScrollView>

    </>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: wp(".1%"),
    paddingBottom: hp("1%"),
  },
  cardContainer: {
    margin: wp("1%"),
    width: wp("85%"),
    height: hp("25%"),
    alignItems: "center",
  },
  cardContent: {
    // paddingVertical: wp('1%'),
    width: wp("60%"),
    height: hp("10%"),
  },
  formBackground: {
    width: wp('85%'),
    height: hp('8%'),
    paddingBottom: hp('3%')
  },
  gamesDisplay: {
    paddingLeft: wp('8%'),
    paddingTop: hp('2%'),
    borderRadius: wp("5%"),
    width: wp("90%"),
    height: hp("6.5%")
  },
})

export default PlayCheersGovernor
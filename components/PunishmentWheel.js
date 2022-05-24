import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Button } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Card } from 'react-native-paper'
//import  WheelOfFortune  from 'react-native-wheel-of-fortune'
// import knob from '../assets/images/knob.png'
//mport knob from './ImageManager'//

import punishmentWheel from '../data/punishmentWheel'
import AppButton from './AppButton'

function PunishmentWheel(props) {
  const punishWheel = punishmentWheel.punishmentWheel

  const [showPunishment, setShowPunishment] = useState(false)
  const [punishment, setPunishment] = useState(null)

  const[goToRuleModal, setGoToRuleModal] = useState(false)

  useEffect(()=>{
    setShowPunishment(false)
    setPunishment(null)
    setGoToRuleModal(false)
  }, [])

  const selectRandomPunishment = () => {
    console.log(punishWheel)
    let randPunishment = Math.floor(Math.random() * punishWheel.length)
    // console.log(randPunishment, punishWheel[randPunishment])
    setPunishment(punishWheel[randPunishment])
    setShowPunishment(true)
    setGoToRuleModal(false)
  }

  const navigateToRuleModal = () => {
    setGoToRuleModal(true)
  }


  return(
    <View style={[styles.container, {
      flexDirection: "column",
      alignItems: 'center'
    }]}>
      <View style={{paddingBottom: hp('5%')}}>
        <AppButton onPress={selectRandomPunishment} title='Get Punished'/>
      </View>
      {showPunishment && 
      <View>
        <AppButton onPress={navigateToRuleModal} title={punishment.name}/>
      </View>
      }
      {goToRuleModal && props.navigation.navigate("Showing a house rule", { rule: punishment })}
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: wp("15%"),
    alignItems: 'center'
  },
});
export default PunishmentWheel

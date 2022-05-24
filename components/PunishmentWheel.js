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

// https://www.npmjs.com/package/react-native-reanimated-carousel

// CSGO case slide code (JS)
// var cardList 	= $('.cardList').first(), 
//     cards 		= $('.card'), 
//     speed 		= 1000,
//     width 		= 100, 
//     randomize 	= true, 
//     distance 	= 20 * width 
// ;

// for (var i = 0; i < 50; i++) {
//     cards.clone().appendTo(cardList);
// }

// function spin() {
//     var newMargin = 0, newDistance = distance;
//     if (randomize) {
//         newDistance = Math.floor(Math.random() * cards.length * 5);
// 		    newDistance += cards.length * 10;
//         var rand = Math.floor((Math.random()*100)+1);
//         newDistance *= rand;
//     } 
// 	newMargin = -(newDistance);
//     cards.first().animate({
//         marginLeft: newMargin
//     }, 7500);
// }

// $('#spin').click(function() {
//     //cards.first().css('margin-left', 0);
//     setTimeout(spin,500);
//     return false;
// });

// CSGO case slide code (CSS)
// * {
//   box-sizing: border-box;
//   padding: 0;
//   margin: 0;
// }

// .cardList {
//   height: 100px;
//   width: 302px;
//   position: relative;
//   margin: 10px;
//   border: 1px solid #33e;
//   overflow: hidden;
//   white-space: nowrap;
// }

// .card {
//   display: inline-block;
//   text-align: center;
//   height: 100px;
//   width: 100px;
//   line-height: 100px;
//   background-color: #99e;
//   font-family: monospace;
//   font-size: 2em;
//   color: #444;
//   border-left: 1px solid #33e;
//   border-right: 1px solid #33e;
// }

// .cardList::before,
// .cardList::after {
//   content: '';
//   display: block;
//   z-index: 100;
//   width: 0px;
//   height: 0px;
//   transform: translateX(-50%);
//   border-left: 8px solid transparent;
//   border-right: 8px solid transparent;
// }

// .cardList::before {
//   position: absolute;
//   top: 0px;
//   left: 50%;
//   border-top: 12px solid #33e;
// }

// .cardList::after {
//   position: absolute;
//   bottom: 0px;
//   left: 50%;
//   border-bottom: 12px solid #33e;
// }

// .common {
//   background-color: green;
//   width: 200px;
// }
// .rare {
//   background-color: lightblue;
//   width: 100px;
// }
// .mythical {
//   background-color: yellow;
//   width: 50px;
// }
// .legendary {
//   background-color: orange;
//   width: 10px;
// }

// CSGO case opening code (HTML)
{/* <div class="cardList"><!--
    --><div class="card common">Common</div><!--
    --><div class="card rare">Rare</div><!--
    --><div class="card mythical">M</div><!--
    --><div class="card legendary">L</div><!--
--></div>
<button id="spin">Spin</button> */}

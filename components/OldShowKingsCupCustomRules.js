import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Card } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5'

import TrashIconButton from "./TrashIconButton"
import gamesList from '../data/gamesList'
import Draggable from 'react-native-draggable'


function OldShowKingsCupCustomRules(props) {

  const redirect = () => {
    props.navigation.goBack()
  }

  /** Look at rules - once selected shows a list of empty cards which you can then click to assign - redirects back to remaining rules not used then repeat */
  
    const [showRuleModal, setShowRuleModal] = useState(false)
    const [currentRule, setCurrentRule] = useState({})
    const [notEnoughCustomRules, setNotEnoughCustomRules] = useState(false)
    const [refreshPage, setRefreshPage] = useState(false)
 

  let x = wp("16.6%")
  let y = hp("0.75%")
  let count = 1
  
  const [customRulesArr, setCustomRulesArr] = useState(gamesList.games[0].customRules)
  // const [weirdArr, setWeirdArr] = useState([["snakeEyes", wp("16.6%"), hp("6.7%")],["you", wp("51.6%"), hp("6.7%")],["me", wp("16.6%"), hp("12.65%")],
  //   ["whores", wp("51.6%"), hp("12.65%")], ["gecko", wp("16.6%"), hp("18.6%")], ["dicks", wp("51.6%"), hp("18.6%")],
  //   ["heaven", wp("16.6%"), hp("24.55%")], ["mate", wp("51.6%"), hp("24.55%")], ["waterfall", wp("16.6%"), hp("30.5%")],
  //   ["social", wp("51.6%"), hp("30.5%")], ["rhyme", wp("16.6%"), hp("36.45%")], ["NHIE", wp("51.6%"), hp("36.45%%")], 
  //   ["qMaster", wp("16.6%"), hp("42.4%")], ["categories", wp("51.6%"), hp("42.4%")], ["helmet", wp("16.6%"), hp("48.35%")], 
  //   ["makeARule", wp("51.6%"), hp("48.35%")], ["qCreation", wp("16.6%"), hp("54.3%")], ["bigBooty", wp("51.6%"), hp("54.3%")],
  //   ["theFool",  wp("16.6%"), hp("60.25%")], ["highLow", wp("51.6%"), hp("60.25%")], ["fillVessel", wp("16.6%"), hp("66.2%")]
  // ])
  
  useEffect(()=> {
    setShowRuleModal(false)
    count = 1
    setRefreshPage(false)
  },[])

  useEffect(()=> {
    setNotEnoughCustomRules((customRulesArr.length - 14) < 0)
  },[customRulesArr])

  let ruleDescObj = gamesList.games[0].ruleDescription
  const rulesDescription = Object.keys(ruleDescObj).map(key => <option value={key}>{ruleDescObj[key]}</option>)
  let cardTitles = gamesList.games[0].customRulesData

  
  const activateShowRuleModal = (ruleNeedingDescription) => {
    let matchingWord = ruleNeedingDescription.replace(/\s/g, "")
    let theDescription = rulesDescription.filter(rule => {
      if (rule.props.value.toLowerCase() == matchingWord.toLowerCase()) {
        return rule
      }
    })
    let newObj = { name: theDescription[0].props.value, desc: theDescription[0].props.children }
    setCurrentRule(newObj)
    setShowRuleModal(true)
  }

  const refreshPageEvent = () => {
    setRefreshPage(true)
  }
  //21

  const removeRuleFromList = (rule) => {
    setCustomRulesArr(customRulesArr.filter(cRule => {return cRule != rule}))
  }


  return (
    <>
      <View style={[styles.container]}>
    {cardTitles.map(titles => {
      return (
        
        <View key={titles} >
              
              <Card style={[styles.cardContainer]}>
                <View style={{ flexDirection: "row" }}>
                  <View style={[styles.cardTitle]}>
      
                    <Card.Title titleStyle={[styles.titleStyling]} title={titles} />
                  </View>
                </View>
              </Card>
            </View>
      )
    })}

    {customRulesArr.map(rule => {            
            if(x < wp("35%") && count > 1) {
              x+=wp("35%")
            } else if(x = wp("51.6%")) {
              x = wp("16.6%")
              y+=hp("5.95%")
            }
            count++
            
            return (
              <Draggable key={rule} x={x} y={y} minX={wp("16.6%")} maxX={wp("93.6%")} minY= {hp(".75%")} maxY={hp("84.4%")}>
               
            <View style={[styles.cardContent]}>
              <Card.Content style={[styles.buttonsWithTrash]}>
                <View style={[styles.word]}><Button onPress={() => activateShowRuleModal(rule)} title={rule} /></View>
                <View style={[styles.trashIcon]}><TrashIconButton onPress={() => removeRuleFromList(rule)} title={"trash-alt"} size={18}/></View>
              </Card.Content>
            </View>
        </Draggable>
        
        )
      }

  )}
  {!notEnoughCustomRules &&

    <View style={{alignItems: "center"}}>
    <Text>You need 14 total rules so you need to delete: {customRulesArr.length - 14} rules</Text>
  </View>
  }
  {notEnoughCustomRules && 
    <View style={{marginLeft: wp("6%")}}>
      <Text>You don't have enough rules left. Click <Card.Content><Button onPress={() => refreshPageEvent()} title={"this"} /></Card.Content> to refresh the page.</Text>
    </View>}
  </View>
  {showRuleModal && props.navigation.navigate("Showing a rule", { rule: currentRule })}
  {refreshPage && props.navigation.push("Show old kings cup custom rules")}
    </>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titleText: {
    fontFamily: "sans-serif",
    fontSize: wp("8%"),
    color: "#2F4F4F",
    fontWeight: "600",
  },
  subText: {
    fontFamily: "sans-serif-light",
    fontSize: wp("5%"),
    fontWeight: "500",
    color: "#008B8B"
  },
  cardContainer: {
    margin: wp("1%"),
    width: wp("80%"),
    height: hp("5%"),
    alignItems: "center"
  },
  cardTitle: {
    marginRight: wp("45%"),
    width: wp("40%"),
    height: hp("4%"),
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  cardContent: {
    width: wp("42%"),
    height: hp("6%"),
    
  },
  titleStyling: {
    color:"#fff", 
    fontWeight:"bold", 
    backgroundColor: "#2d5287", 
    borderRadius:wp("1%"), 
    paddingHorizontal: wp("1%") ,
    marginBottom:hp("1%"), 
    marginRight:wp("27%"),
    alignSelf: "center"
  },
  scrollViewCont: {
    flex: 1
  },
  trashIcon: {
    alignSelf: "center",
  },
  buttonsWithTrash: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",    
  },
  word: {
    flexGrow: 1
  }
})

export default OldShowKingsCupCustomRules
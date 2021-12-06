import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Card } from 'react-native-paper'

import gamesList from '../data/gamesList'
import Draggable from 'react-native-draggable'


function ShowKingsCupCustomRules(props) {

  // let rule = route.params.rule
  // console.log(rule)
  //   const resetModal = () => {
  //     props.dispatch(setShowPersonModal(!props.showPersonModal))
  //   }

  const redirect = () => {
    props.navigation.goBack()
  }
  
    const [showRuleModal, setShowRuleModal] = useState(false)
    const [currentRule, setCurrentRule] = useState({})
 
  // const [xCount, setXCount] = useState(1)
  // const [yCount, setYCount] = useState(1)
  let x = wp("17%")
  let y = hp("1%")
  let count = 1
  
  useEffect(()=> {
    setShowRuleModal(false)
  },[])

  let ruleDescObj = gamesList.games[0].ruleDescription
  const rulesDescription = Object.keys(ruleDescObj).map(key => <option value={key}>{ruleDescObj[key]}</option>)
  let customRulesArr = gamesList.games[0].customRules
  let cardTitles = gamesList.games[0].customRulesData
  // console.log(customRulesArr)
  // let customRules = gamesList.games[0].customRulesData
  // const customRulesExtracted = Object.keys(customRules).map(key => <option value={key}>{customRules[key]}</option>)
  // let ace = customRulesExtracted.splice(9,1)
  // customRulesExtracted.unshift(ace[0])
  // console.log(customRulesExtracted)

  
  const activateShowRuleModal = (ruleNeedingDescription) => {
    // console.log(rulesDescription)
    let matchingWord = ruleNeedingDescription.replace(/\s/g, "")
    let theDescription = rulesDescription.filter(rule => {
      if (rule.props.value.toLowerCase() == matchingWord.toLowerCase()) {
        return rule
      }
    })
    let newObj = { name: theDescription[0].props.value, desc: theDescription[0].props.children }
    // console.log(newObj)
    setCurrentRule(newObj)
    setShowRuleModal(true)
  }

  return (
    <>
      <View stlye={{ display: "flex", flexDirection: "row", flexWrap: "wrap" } }>
    {cardTitles.map(titles => {
      return (
        
        <View key={titles} stlye={{ justifyContent: "center" }}>
              
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
            } else if(x > wp("35%")) {
              x = wp("17%")
              y+=hp("5.9%")
            }
            count++
            
            return (
              <Draggable key={rule} x={x} y={y} minX={wp("1%")} maxX={wp("95%")} maxY={hp("95%")}>
            <View style={[styles.cardContent]}>
              <Card.Content><Button onPress={() => activateShowRuleModal(rule)} title={rule} /></Card.Content>
            </View>
        </Draggable>
        
        )
      }

  )/**} */}
  </View>
  {showRuleModal && props.navigation.navigate("Showing a rule", { rule: currentRule })}
    </>
  )
  
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "sans-serif",
    fontSize: wp("8%"),
    color: "#2F4F4F",
    fontWeight: "600",
    // textShadow: "1px 1px black"
  },
  subText: {
    fontFamily: "sans-serif-light",
    fontSize: wp("5%"),
    fontWeight: "500",
    color: "#008B8B"
  },
  cardContainer: {
    margin: wp("1%"),
    marginLeft: wp("10%"),
    // width: wp("42.5%"),
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
    width: wp("40%"),
    height: hp("6%")
  },
  titleStyling: {
    color:"#fff", 
    fontWeight:"bold", 
    backgroundColor: "#2d5287", 
    borderRadius:wp("1%"), 
    paddingHorizontal: wp("1%") ,
    marginBottom:hp("1%"), 
    // justifyContent: "center",
    marginRight:wp("27%"),
    alignSelf: "center"
  },
  scrollViewCont: {
    flex: 1
  }
})

export default ShowKingsCupCustomRules
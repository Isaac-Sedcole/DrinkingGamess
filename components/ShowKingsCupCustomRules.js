import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Card } from 'react-native-paper'
import CheckBox from './CheckBox'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AppButton from "./AppButton"
import TrashIconButton from "./TrashIconButton"
import gamesList from '../data/gamesList'


function ShowKingsCupCustomRules(props) {

  const [showRuleModal, setShowRuleModal] = useState(false)
  const [currentRule, setCurrentRule] = useState({})
  
  const [customRulesArr, setCustomRulesArr] = useState(gamesList.games[0].customRules)
  const [customRulesData, setCustomRulesData] = useState(gamesList.games[0].customRulesData)
  const [selectedRuleAndData, setSelectedRuleAndData] = useState({data: null, rule: null})
  const [completedList, setCompletedList] = useState([])
  const [showCompletedList, setShowCompletedList] = useState(false)
  const [buttonShouldBeDisabled, setButtonShouldBeDisabled] = useState(true)

  const [refreshPage, setRefreshPage] = useState(false)

  
  useEffect(()=> {
    setShowRuleModal(false)
    setShowCompletedList(false)
    setRefreshPage(false)
  },[])

  useEffect(()=> {
    if(selectedRuleAndData.data == null || selectedRuleAndData.rule == null){
      setButtonShouldBeDisabled(true)
    } else {
      setButtonShouldBeDisabled(false)
    }
  },[selectedRuleAndData])

  const refreshPageEvent = () => {
    setRefreshPage(true)
  }
  
   let ruleDescObj = gamesList.games[0].ruleDescription
   const rulesDescription = Object.keys(ruleDescObj).map(key => <option value={key}>{ruleDescObj[key]}</option>)
   

  
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

  const handleCheckBox = (stringIdentifier, value) => {
    //check if we are passing a rule or data
    if(stringIdentifier == "rule") {
      if(selectedRuleAndData.rule == value) {
        setSelectedRuleAndData({data: selectedRuleAndData.data, rule: null})
      } else {
        setSelectedRuleAndData({data: selectedRuleAndData.data, rule: value})
      }
    }else {
      if(selectedRuleAndData.data == value) {
        setSelectedRuleAndData({data: null, rule: selectedRuleAndData.rule})
      }else {
        setSelectedRuleAndData({data: value, rule: selectedRuleAndData.rule})
      }
    }
  }

  const addRuleToList = () => {

    let localSelectedRuleAndData = selectedRuleAndData
    setCompletedList(list => {
      return [...list, localSelectedRuleAndData]
    })
    setCustomRulesArr(list => {
      return list.filter(rule => {return rule!=localSelectedRuleAndData.rule})
    })
    setCustomRulesData(list => {
      return list.filter(data => {return data!=localSelectedRuleAndData.data})
    })
    setSelectedRuleAndData({data: null, rule: null})
  }

  const activateShowCompletedList = () => {
    setShowCompletedList(!showCompletedList)
  }

  return (
    <>
      {/* <Card.Content><AppButton onPress={() => activateShowRuleModal(rule.props.children)} title={rule.props.children} /></Card.Content> */}
      {/* <View style={[styles.trashIcon]}><TrashIconButton onPress={() => removeRuleFromList(rule)} title={"trash-alt"} size={18}/></View> */}
      <ScrollView style={[styles.scrollViewCont]}>
      <View style={{flexDirection: "row", flexWrap: "wrap",  justifyContent: "space-evenly"}}>

      {/* rules */}
      {customRulesArr.map(rule=> {
        return (
          <Card style={{marginVertical: wp("1%"), width: wp("31%")}} key={rule}>
            <View>
              <Card.Content>
                <CheckBox status={selectedRuleAndData.rule==rule ? "checked" : "unchecked"} onPress={() => handleCheckBox("rule", rule)}></CheckBox>
                <View style={[styles.word]}><Button onPress={() => activateShowRuleModal(rule)} title={rule} /></View>
              </Card.Content>
            </View>
          </Card>          
        )
      })}
      </View>
      <View style={{paddingHorizontal: hp("2%")}}>
        <Button disabled={buttonShouldBeDisabled} onPress={() => addRuleToList()} title="Confirm"/>
      </View>
      {/* data */}
      <View style={{flexDirection: "row", flexWrap: "wrap", padding: wp("2%"), justifyContent: "center"}}>

      {customRulesData.map(data => {
        return (
          <Card key={data} style={{paddingHorizontal: wp("6%"), paddingVertical: hp("2%"), margin: wp("1%")}}>
            <View style={{flexDirection: "row"}}>
              <Card.Content>
                <CheckBox label={data} status={selectedRuleAndData.data==data ? "checked" : "unchecked"} onPress={() => handleCheckBox("data", data)}></CheckBox>
              </Card.Content>
            </View>
          </Card>
        )
      })}
      </View>
      <View style={{paddingVertical: hp("2%"), paddingHorizontal: wp("2%")}}>
        <AppButton buttonColour={"#2E8B57"} onPress={() => activateShowCompletedList()} title={showCompletedList ? "Hide Completed List" : "Show Completed List"} />
      </View>

      <View style={{flexDirection: "row", flexWrap: "wrap",  justifyContent: "space-evenly", paddingBottom: hp("1%")}}>
      {/* completedList */}
      {showCompletedList && completedList.map(list => {
        return (
          
          <Card style={{marginVertical: wp("1%"), width: wp("31%")}} key={list.rule}>
            <View>
              <Card.Content>
                {/* <CheckBox status={selectedRuleAndData.rule==rule ? "checked" : "unchecked"} onPress={() => handleCheckBox("rule", rule)}></CheckBox> */}
                <Text style={{alignSelf: "center", fontWeight: 'bold', fontSize: hp("3%") }}>{list.data}</Text>
                <View style={[styles.word]}><Button onPress={() => activateShowRuleModal(list.rule)} title={list.rule} /></View>
              </Card.Content>
            </View>
          </Card>
          )
        })}
        </View>
        <View style={{paddingHorizontal: wp("2%"), paddingBottom: hp("2%")}}>
          <Button onPress={() => refreshPageEvent()} title={"refresh"} />
        </View>
      {showRuleModal && props.navigation.navigate("Showing a rule", { rule: currentRule })}
      {refreshPage && props.navigation.push("Show kings cup custom rules")}
      </ScrollView>
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
    paddingBottom: hp("1%"),
    width: wp("28%"),
    right: wp("2.8%")
  }
})

export default ShowKingsCupCustomRules
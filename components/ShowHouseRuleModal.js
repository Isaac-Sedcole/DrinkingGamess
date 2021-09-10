import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'




function ShowHouseRuleModal({route, navigation }, props) {

  const [isActive, setActive] = useState(true)

    useEffect(()=> {
        setActive(true)
    },[])

  let rule = route.params.rule
  // console.log(rule)
//   const resetModal = () => {
//     props.dispatch(setShowPersonModal(!props.showPersonModal))
//   }
    const redirect = () => {
        navigation.goBack()
    }

  return (
    <>
      <View style={{padding: wp("5%")}}>

            <Text>{rule.name}: {rule.description}</Text>
        <Button onPress={() => redirect()} title="OK!"/>
      </View>
      
    </>
  )
}

export default ShowHouseRuleModal
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'




function ShowRuleModal({ route, navigation }, props) {

  // const [isActive, setActive] = useState(true)

  //   useEffect(()=> {
  //       setActive(true)
  //   },[])

  let rule = route.params.rule
  console.log(rule)
  //   const resetModal = () => {
  //     props.dispatch(setShowPersonModal(!props.showPersonModal))
  //   }
  const redirect = () => {
    navigation.goBack()
  }

  return (
    <>
      
        <View style={{padding: wp("5%")}}>

          {/* className={['modal', isActive ? "is-active" : ""].join(' ')} */}
          <Text> {rule}</Text>
          {/* <button className="button is-medium is-info is-outlined" onClick={() => setActive(false)} onClick={resetModal}>OK!</button> */}
          <Button onPress={() => redirect()} title="OK!" />
        </View>
      

    </>
  )
}

export default ShowRuleModal
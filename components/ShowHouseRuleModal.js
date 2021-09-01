import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'



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
      <div >
            {rule.name}: {rule.description}
        <Button onPress={() => redirect()} title="OK!"/>
      </div>
    </>
  )
}

export default ShowHouseRuleModal
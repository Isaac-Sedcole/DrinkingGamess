import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View , Button} from 'react-native'



function ShowRuleModal({route, navigation }, props) {

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
      
        {/* className={['modal', isActive ? "is-active" : ""].join(' ')} */}
        <Text> {rule}</Text>
        {/* <button className="button is-medium is-info is-outlined" onClick={() => setActive(false)} onClick={resetModal}>OK!</button> */}
        <Button  onPress={() => redirect()} title="OK!"/>
      
    </>
  )
}

export default ShowRuleModal
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'



function ShowHouseRuleModal({route, navigation }, props) {

  const [isActive, setActive] = useState(true)

    useEffect(()=> {
        setActive(true)
    },[])

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
      <div >
        {/* className={['modal', isActive ? "is-active" : ""].join(' ')} */}
            {rule.name}
        {/* <button className="button is-medium is-info is-outlined" onClick={() => setActive(false)} onClick={resetModal}>OK!</button> */}
        <button  onClick={() => redirect()}>OK!</button>
      </div>
    </>
  )
}

export default ShowHouseRuleModal
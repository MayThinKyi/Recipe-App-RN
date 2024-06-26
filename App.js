import { View, Text } from 'react-native'
import React from 'react'
import WelcomeScreen from './app/screens/WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './app/navigation/AppNavigator'

const App = () => {
  return (
   <NavigationContainer>
    <AppNavigator/>
   </NavigationContainer>
  )
}

export default App
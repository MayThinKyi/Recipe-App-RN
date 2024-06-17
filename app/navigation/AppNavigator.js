 import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from '../routes';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
 
const Stack=createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown:false}} >
        <Stack.Screen name={routes.WELCOME} component={WelcomeScreen} />
        <Stack.Screen name={routes.HOME} component={HomeScreen} />
        <Stack.Screen name={routes.MEAL_DETAILS} component={MealDetailsScreen} />
      </Stack.Navigator>
  )
}

export default AppNavigator
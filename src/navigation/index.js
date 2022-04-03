import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SiginScreen from '../screens/SiginScreen';
import SignUpScreen from '../screens/SignupScreen/SignupScreen';
import Home from '../screens/Home/HomeScreen';
import FormScreen from '../screens/Form/FormScreen';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SiginScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Form" component={FormScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
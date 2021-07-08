import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'; 

import { Login } from '../pages/Login';
import { NavigateTabs } from './NavigateTabs';
import { PiarText } from '../pages/PiarText';

const { Navigator, Screen } = createStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}} >
        <Screen name="Login" component={Login} ></Screen>
        <Screen name="NavigateTabs" component={NavigateTabs} ></Screen>
        <Screen name="PiarText" component={PiarText} ></Screen>
      </Navigator>
    </NavigationContainer>
  )
}

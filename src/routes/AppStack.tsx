import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'; 

import { Login } from '../pages/Login';
import { Feed } from '../pages/Feed';
import { NavigateTabs } from './NavigateTabs';

const { Navigator, Screen } = createStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}} >
        <Screen name="Login" component={Login} ></Screen>
        <Screen name="NavigateTabs" component={NavigateTabs} ></Screen>
      </Navigator>
    </NavigationContainer>
  )
}

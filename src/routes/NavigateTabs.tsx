import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Profile } from '../pages/Profile/Index';
import { Notifications } from '../pages/Notifications/Index';
import { ConfigPage } from '../pages/ConfigPage/Index';
import { Feed } from '../pages/Feed';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

export const NavigateTabs = () => {
  return(
    <Navigator
      tabBarOptions={{
        style:{
          elevation: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems:'center',
          justifyContent:'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bcc',
        activeTintColor: '#32264d'
      }}
    >
      <Screen 
        name="Feed" 
        component={Feed}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons name="altimeter" size={24} color="black" />
            );
          }
        }}
      />
      <Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <AntDesign name="user" size={24} color="black" />
            );
          }
        }}
      />
      <Screen 
        name="Notifications" 
        component={Notifications}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="notifications" size={24} color="black" />
            );
          }
        }}
      />
      <Screen 
        name="ConfigPage" 
        component={ConfigPage}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <EvilIcons name="gear" size={24} color="black" />
            );
          }
        }}
      />
    </Navigator>
  )
}
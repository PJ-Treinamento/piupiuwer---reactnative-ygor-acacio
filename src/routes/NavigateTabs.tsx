import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Profile } from '../pages/Profile/Index';
import { Notifications } from '../pages/Notifications/Index';
import { ConfigPage } from '../pages/ConfigPage/Index';
import { Feed } from '../pages/Feed';

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
          tabBarLabel: 'Feed',
          // tabBarIcon: ({ color, size, focused }) => {
            // return (
            //   <Ionicons  name="ios-easel" size={size} color={focused ? '#8257e5': color} />
            // );
          // }
        }}
      />
      <Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          // tabBarIcon: ({ color, size, focused }) => {
          //   return (
          //     <Ionicons  name="ios-heart" size={size} color={focused ? '#8257e5': color} />
          //   );
          // }
        }}
      />
      <Screen 
        name="Notifications" 
        component={Notifications}
        options={{
          tabBarLabel: 'Notificações',
          // tabBarIcon: ({ color, size, focused }) => {
          //   return (
          //     <Ionicons  name="ios-heart" size={size} color={focused ? '#8257e5': color} />
          //   );
          // }
        }}
      />
      <Screen 
        name="ConfigPage" 
        component={ConfigPage}
        options={{
          tabBarLabel: 'Configurações',
        //   tabBarIcon: ({ color, size, focused }) => {
        //     return (
        //       <Ionicons  name="ios-heart" size={size} color={focused ? '#8257e5': color} />
        //     );
        //   }
        }}
      />
    </Navigator>
  )
}
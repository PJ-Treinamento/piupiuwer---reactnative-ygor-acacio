import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AuthProvider } from './src/hooks/UseAuth';
import { AppStack } from './src/routes/AppStack';
import AppLoading from 'expo-app-loading';
import { useFonts, RobotoMono_400Regular,RobotoMono_600SemiBold } from '@expo-google-fonts/roboto-mono';

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
    RobotoMono_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <AuthProvider>
        <AppStack/>
        <StatusBar/>
      </AuthProvider>
    </>
  );
}

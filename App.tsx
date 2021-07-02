import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Feed } from './src/pages/Feed';
import { Login } from './src/pages/Login';

export default function App() {
  return (
    <>
      <Feed/>
      <StatusBar/>
    </>
  );
}

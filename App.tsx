import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AuthProvider } from './src/hooks/UseAuth';
import { AppStack } from './src/routes/AppStack';

export default function App() {
  return (
    <>
      <AuthProvider>
        <AppStack/>
        <StatusBar/>
      </AuthProvider>
    </>
  );
}

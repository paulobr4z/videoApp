import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Routes from './src/routes'
import { CountProvider } from './src/context/DetailsContext'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(0, 0, 0)',
  },
};

export default function App() {
  return (
    <>
      <CountProvider>
        <SafeAreaProvider>
          <NavigationContainer theme={MyTheme}>
            <StatusBar backgroundColor="#000" />
            <SafeAreaView style={{ flex: 1 }}>
              <Routes />
            </SafeAreaView>
          </NavigationContainer>
        </SafeAreaProvider>
      </CountProvider>
    </>
  );
}
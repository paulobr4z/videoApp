import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

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
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {

        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {

      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <CountProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={MyTheme} onReady={onLayoutRootView}>
          <StatusBar backgroundColor="#000" />
          <SafeAreaView style={{ flex: 1 }}>
            <Routes />
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </CountProvider>
  );
}
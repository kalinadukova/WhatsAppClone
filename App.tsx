/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.text}>Hiurfihfu</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Light',
    fontSize: 34,
    color: 'black',
  },
});

export default App;

import * as React from 'react';
import type { ColorSchemeName } from 'react-native';

import { enableScreens } from 'react-native-screens';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import type { RootStackParamList } from '../constants/types/IRootStackParamList';

import Root from '../screens/Root';
import Login from '../screens/Login';
import Offline from '../screens/Offline';
import Online from '../screens/Online';
import Call from '../screens/Call';
import Map from '../screens/Map';

enableScreens();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

const options = {
  noHeader: {
    headerShown: false
  },
  login: {
    headerStyle: {
      elevation: 0
    },
    title: '',
  }
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={Root} options={options.noHeader} />
      <Stack.Screen name="Call" component={Call} options={options.noHeader} />
      <Stack.Screen name="Login" component={Login} options={options.login} />
      <Stack.Screen name="Online" component={Online} options={options.noHeader} />
      <Stack.Screen name="Offline" component={Offline} options={options.noHeader} />
      <Stack.Screen name="Map" component={Map} options={options.noHeader} />
    </Stack.Navigator>
  );
}

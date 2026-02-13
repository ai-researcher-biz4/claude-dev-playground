import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailScreen from 'src/screens/detail/DetailScreen';
import SettingsScreen from 'src/screens/settings/SettingsScreen';

import AuthNavigator from './AuthNavigator';
import { linking } from './linking';
import MainNavigator from './MainNavigator';

import type { RootStackParamList } from 'src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  // TODO: Replace with actual auth state from store
  const isAuthenticated = false;

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Main" component={MainNavigator} />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                headerShown: true,
                headerTitle: 'Settings',
                animation: 'slide_from_bottom',
              }}
            />
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              options={{
                headerShown: true,
                headerTitle: 'Detail',
              }}
            />
          </>
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

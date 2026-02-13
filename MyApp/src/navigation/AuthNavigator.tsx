import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ForgotPasswordScreen from 'src/screens/auth/ForgotPasswordScreen';
import LoginScreen from 'src/screens/auth/LoginScreen';
import OtpVerificationScreen from 'src/screens/auth/OtpVerificationScreen';
import RegisterScreen from 'src/screens/auth/RegisterScreen';

import type { AuthStackParamList } from 'src/types/navigation';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

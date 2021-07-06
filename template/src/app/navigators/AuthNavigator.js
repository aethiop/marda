import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

const AuthStack = createStackNavigator();
export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Register" component={RegisterPage} />
      <AuthStack.Screen name="Login" component={LoginPage} />
    </AuthStack.Navigator>
  );
};

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfilePage from '../pages/ProfilePage';

const MainStack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="profile" component={ProfilePage} />
    </MainStack.Navigator>
  );
};

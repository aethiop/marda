import WebviewCrypto from 'react-native-webview-crypto';
import 'react-native-get-random-values';

import React from 'react';
import {StyleSheet} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Auth} from './src/app/contexts/auth.js';
import {AuthNavigator} from './src/app/navigators/AuthNavigator';
import {MainNavigator} from './src/app/navigators/MainNavigator';
import {User} from './src/app/contexts/user';
import useAuth from './src/app/hooks/useAuth';

const Root = createStackNavigator();

const App = () => {
  const {auth, state} = useAuth();

  const renderScreen = () => {
    return (
      <Root.Navigator screenOptions={{headerShown: false}}>
        {state.profile ? (
          <Root.Screen name={'Main'}>
            {() => (
              <User.Provider value={{profile: state.profile}}>
                <MainNavigator />
              </User.Provider>
            )}
          </Root.Screen>
        ) : (
          <Root.Screen name="Auth" component={AuthNavigator} />
        )}
      </Root.Navigator>
    );
  };

  return (
    <Auth.Provider value={auth}>
      <NavigationContainer>
        <WebviewCrypto />
        {renderScreen()}
      </NavigationContainer>
    </Auth.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

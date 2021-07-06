import React, {useContext, useState} from 'react';
import {TouchableOpacity, TextInput, View, Text} from 'react-native';

import {Auth} from '../contexts/auth';

const LoginScreen = ({navigation}) => {
  const [key, setKey] = useState('');
  const {login} = useContext(Auth);

  return (
    <View style={{marginTop: 40}}>
      <Text>Login</Text>
      <TextInput
        onChangeText={text => setKey(text)}
        placeholder={'Paste your key here...'}
      />
      <TouchableOpacity
        onPress={async () => {
          try {
            console.log('FROM LOGIN SCREEN: ', key);
            login(JSON.parse(key));
          } catch (e) {
            console.log(e);
          }
        }}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Register');
        }}
        style={{marginTop: 18}}>
        <Text>Create an account...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

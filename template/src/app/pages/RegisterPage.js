import React, {useContext, useState} from 'react';

import {TouchableOpacity, TextInput, View, Text} from 'react-native';

import {Auth} from '../contexts/auth';

const RegisterScreen = ({navigation}) => {
  const {register} = useContext(Auth);
  const [username, setUsername] = useState('');

  return (
    <View style={{marginTop: 40}}>
      <Text>Register</Text>
      <TextInput
        onChangeText={text => setUsername(text)}
        placeholder={'Type your username...'}
      />

      <TouchableOpacity
        onPress={() => {
          try {
            register(username);
          } catch (e) {
            console.log(e);
          }
        }}>
        <Text>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={{marginTop: 18}}>
        <Text>I already have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

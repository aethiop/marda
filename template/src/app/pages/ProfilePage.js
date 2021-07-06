import React, {useState} from 'react';
import {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Auth} from '../contexts/auth';
import {User} from '../contexts/user';

const ProfilePage = ({navigation}) => {
  const {profile} = useContext(User);
  const {logout} = useContext(Auth);
  const {username, pair} = profile;
  return (
    <SafeAreaView style={styles.container}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.title}>{username}</Text>
        <TouchableOpacity
          size={25}
          onPress={() => {
            logout();
          }}>
          <Text>LOGOUT</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle} selectable={true}>
        {JSON.stringify(pair)}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '100',
  },
});

export default ProfilePage;

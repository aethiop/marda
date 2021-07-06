import React from 'react';

import Gun from 'gun/gun';
import SEA from 'gun/sea';
import 'gun/lib/path';
import 'gun/lib/promise';
import 'gun/lib/radix.js';
import 'gun/lib/radisk.js';
import 'gun/lib/store.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Store from 'gun/lib/ras.js';

const useGun = () => {
  const store = Store({AsyncStorage});
  const gun = Gun({
    store,
    peers: ['http://localhost:8765/gun'],
  });
  //App namespace
  const app = gun.get('jot');
  const user = gun.user();
  return {gun, app, user, SEA};
};

export default useGun;

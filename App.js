import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';

import {

  View,
} from 'react-native';
import J1 from './screens/j1';
import Home from './screens/homepagetrue';

export default function HomeScreen() {
  
  return (
<View>
<Home></Home>
</View>
  );
}

HomeScreen.navigationOptions = {
  header: J1,
  header: Home,
};

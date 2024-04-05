import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import Join from '../screens/Join';
import Login from '../screens/Login';

const Tab = createBottomTabNavigator();


function Tabs(params:any) {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Join} />
          <Tab.Screen name="Settings" component={Login} />
        </Tab.Navigator>
      );
}

export default Tabs;
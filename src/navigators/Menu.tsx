import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './Tabs'
import { Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

export default function Menu() {
 
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home 🏡" component={Tabs} />
    </Drawer.Navigator>
  );
}

//<Drawer.Screen name="챗봇 🤖" component={Chatbot} />
//
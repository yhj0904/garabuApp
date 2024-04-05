import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './src/navigators/Menu';
import Tabs from './src/navigators/Tabs';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
      
    </NavigationContainer>
  );
}

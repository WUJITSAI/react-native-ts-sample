import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Calculator from './src/pages/Calculator'
import RedPage from './src/pages/RedPage'
import BluePage from './src/pages/BluePage'
import YellowPage from './src/pages/YellowPage'
import GreenPage from './src/pages/GreenPage'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainTab = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name={'Cal'} component={Calculator} />
      <Tab.Screen name={'Blue'} component={BluePage} />
    </Tab.Navigator>
  )
}

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTab} />
        <Stack.Screen name="YELLOW" component={YellowPage} />
        <Stack.Screen name="GREEN" component={GreenPage} />
        <Stack.Screen name="RED" component={RedPage} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;

import React from 'react';
import HomeScreen from '../../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export const HomeStackScreen: React.FC = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

export default HomeStack;

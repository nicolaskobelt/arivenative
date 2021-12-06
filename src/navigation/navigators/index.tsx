import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
import ProductScreen from '../../screens/Product';

const RootStack = createStackNavigator();

const Navigator: React.FC = () => (
  <RootStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      gestureEnabled: false,
      animationEnabled: false,
      headerShown: false,
    }}>
    <RootStack.Screen name="Home" component={HomeScreen} />
    <RootStack.Screen name="Product" component={ProductScreen} />
  </RootStack.Navigator>
);

export default Navigator;

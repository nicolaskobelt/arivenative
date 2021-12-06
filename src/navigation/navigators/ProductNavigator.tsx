import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import ProductScreen from '../../screens/Product';

const ProductStack = createStackNavigator();

export const ProductStackScreen: React.FC = () => (
  <ProductStack.Navigator screenOptions={{ gestureEnabled: true }}>
    <ProductStack.Screen
      name="ProductInformation"
      component={ProductScreen}
      options={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
  </ProductStack.Navigator>
);

export default ProductStackScreen;

import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigators';

const AppContainer: React.FC = () => {
  const navigationRef = useRef<any>();

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator />
    </NavigationContainer>
  );
};
export default AppContainer;

import React from 'react';
import HomeLayout from '../components/Layout';
import { SafeAreaView } from 'react-native';
import { HomeMainContainerProps } from './types';

const HomeMainContainer: React.FunctionComponent<HomeMainContainerProps> = ({
  ...props
}) => {
  return (
    <SafeAreaView>
      <HomeLayout {...props} />
    </SafeAreaView>
  );
};

export default HomeMainContainer;

import React from 'react';
import { ListScreenWrapperPropsType } from './types';
import { CardScreenWrapperScrollView, CardView } from './styled';
import { RefreshControl } from 'react-native';

const ListScreenWrapper: React.FC<ListScreenWrapperPropsType> = ({
  children,
  style,
  onRefresh,
  refreshing = false,
}) => {
  return (
    <CardScreenWrapperScrollView
      refreshControl={
        onRefresh ? (
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        ) : undefined
      }
      showsVerticalScrollIndicator={false}>
      <CardView style={style}>{children}</CardView>
    </CardScreenWrapperScrollView>
  );
};

export default ListScreenWrapper;

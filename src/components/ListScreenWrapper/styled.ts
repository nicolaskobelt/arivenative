import styled from '@emotion/native';
import { Platform } from 'react-native';

export const CardScreenWrapperScrollView = styled.ScrollView`
  width: 100%;
`;

export const CardView = styled.View`
  min-height: ${Platform.OS === 'ios' ? '200%' : '100%'};
  width: 100%;
  align-items: center;
`;

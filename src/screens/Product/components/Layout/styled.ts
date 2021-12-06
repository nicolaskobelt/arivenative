import styled from '@emotion/native';
import { BoldText } from '../../../../components/Text/Texts';

export const Container = styled.ScrollView`
  height: 100%;
  width: 100%;
  padding: 10px;
`;

export const Header = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
`;

export const BackButtonView = styled.TouchableOpacity``;

export const BackButton = styled.Text`
  font-size: 12px;
`;

export const Image = styled.Image`
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

export const Title = styled(BoldText)`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const Brand = styled(BoldText)`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

import styled from '@emotion/native';
import { BoldText, RegularText } from '../../../../components/Text/Texts';

export const HomeLayoutView = styled.View`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
`;

export const HeaderTitle = styled(BoldText)`
  color: ${({ theme }) => theme.color.white};
  font-size: 30px;
  color: ${({ theme }) => theme.color.black};
`;

export const CardTitle = styled(RegularText)`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const CardContent = styled.View`
  width: 400px;
  height: 200px;
  padding: 10px;
`;

export const ButtonsContainer = styled.ScrollView`
  margin: 15px 0;
  height: 60px;
  width: 100%;
`;

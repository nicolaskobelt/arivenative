import styled from '@emotion/native';
import { BoldText } from '../../../components/Text/Texts';
import { ButtonStyledPropsTypes } from './types';

export const Button = styled.TouchableOpacity<ButtonStyledPropsTypes>`
  display: flex;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.gray400 : theme.color.gray100};
  border-radius: ${props => props.theme.borderRadius.default};
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  width: auto;
  height: 40px;
  padding: 5px 10px;
`;

export const ButtonText = styled(BoldText)<ButtonStyledPropsTypes>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.white : theme.color.black};
`;

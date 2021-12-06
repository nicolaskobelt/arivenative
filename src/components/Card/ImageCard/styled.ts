import styled from '@emotion/native';
import { BoldText } from '../../Text/Texts';
import { TitleCardProps } from './types';

export const Card = styled.ImageBackground`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  z-index: 1;
`;

export const TextContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;
  z-index: 2;
  height: 150px;
  background-color: ${({ theme }) => theme.color.lightBlack};
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

export const Title = styled(BoldText)<TitleCardProps>`
  color: ${({ theme, overrideColor }) => overrideColor || theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-variant: small-caps;
  width: 200px;
`;

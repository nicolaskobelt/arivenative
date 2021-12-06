import styled from '@emotion/native';
import { BasicCardProps } from './types';

export const CardWrapper = styled.View<BasicCardProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: ${({ withPadding }) => (withPadding ? 15 : 0)}px;
  box-shadow: ${({ theme }) => theme.shadow.default};
  box-sizing: border-box;
`;

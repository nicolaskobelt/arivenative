import styled from '@emotion/native';

export const LightText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.light};
`;

export const RegularText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.base};
`;

export const BoldText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
`;

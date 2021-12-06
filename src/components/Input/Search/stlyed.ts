import styled from '@emotion/native';

export const InputWrapper = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  border-width: 0;
  padding: 0 5px 0 20px;
  align-self: center;
  font-size: 16px;
`;

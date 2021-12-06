import React from 'react';
import { Button, ButtonText } from './styled';
import { ButtonPropsTypes } from './types';

const ButtonBasic: React.FC<ButtonPropsTypes> = ({
  children,
  isSelected,
  press,
}) => {
  return (
    <Button isSelected={isSelected} onPress={press}>
      <ButtonText isSelected={isSelected}>{children}</ButtonText>
    </Button>
  );
};

export default ButtonBasic;

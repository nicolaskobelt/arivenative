import React from 'react';
import { CardWrapper } from './styled';

const BasicCard: React.FC<{}> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default BasicCard;

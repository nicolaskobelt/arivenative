import React from 'react';
import { InputWrapper, Input } from './stlyed';

const SearchInput: React.FC<{}> = () => {
  return (
    <InputWrapper>
      <Input placeholder="Search... " />
    </InputWrapper>
  );
};

export default SearchInput;

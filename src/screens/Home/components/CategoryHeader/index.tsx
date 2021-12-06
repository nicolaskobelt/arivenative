import React from 'react';
import ImageCard from '../../../../components/Card/ImageCard';
import { Wrapper } from './styled';
import { CategoryHeaderProps } from './types';

const Categories: React.FC<CategoryHeaderProps> = ({
  imageUrl,
  categoryName,
}) => {
  return (
    <Wrapper>
      <ImageCard src={imageUrl} categoryName={categoryName} />
    </Wrapper>
  );
};

export default Categories;

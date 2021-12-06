import React from 'react';
import { TextContainer, Title, Card } from './styled';
import { ImageCardProps } from './types';

const ImageCard: React.FC<ImageCardProps> = ({ src, categoryName }) => {
  return (
    <Card
      source={{
        uri: src,
      }}
      imageStyle={{ borderRadius: 15 }}>
      <TextContainer>
        <Title>{categoryName}</Title>
      </TextContainer>
    </Card>
  );
};

export default ImageCard;

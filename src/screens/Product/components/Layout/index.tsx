import React from 'react';
import {
  Brand,
  Container,
  Image,
  Title,
  Header,
  BackButtonView,
  BackButton,
} from './styled';
import { ProductLayoutProps } from './types';

const ProductLayout: React.FC<ProductLayoutProps> = ({ item, navigation }) => {
  return (
    <Container>
      <Header>
        <BackButtonView onPress={() => navigation.goBack()}>
          <BackButton>Go Back</BackButton>
        </BackButtonView>
      </Header>
      <Image source={{ uri: item.image }} />
      <Brand>{item.brand.name}</Brand>
      <Title>{item.name}</Title>
    </Container>
  );
};

export default ProductLayout;

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductTypes } from '../../api/products/types';
import ProductLayout from './components/Layout';
import { ProductScreenProps } from './types';

class ProductScreen extends React.Component<ProductScreenProps> {
  product: ProductTypes;

  constructor(props: ProductScreenProps) {
    super(props);
    const { route } = this.props;
    const { params } = route.params;
    this.product = params;
  }

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView>
        <ProductLayout navigation={navigation} item={this.product} />
      </SafeAreaView>
    );
  }
}

export default ProductScreen;

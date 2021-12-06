import React from 'react';
import { ProductTypes } from '../../api/products/types';
import HomeMainContainer from './containers/main';
import { HomeScreenPropsType } from './types';

class HomeScreen extends React.Component<HomeScreenPropsType> {
  render() {
    const { navigation } = this.props;
    return (
      <HomeMainContainer
        navigation={navigation}
        goToProduct={(product: ProductTypes) =>
          navigation.push('Product', {
            screen: 'ProductInformation',
            params: product,
          })
        }
      />
    );
  }
}

export default HomeScreen;

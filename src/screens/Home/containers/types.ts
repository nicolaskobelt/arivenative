import { StackNavigationProp } from '@react-navigation/stack';
import { ProductTypes } from '../../../api/products/types';

export type HomeMainContainerProps = {
  navigation: StackNavigationProp<{}>;
  goToProduct: (product: ProductTypes) => void;
};

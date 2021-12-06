import { ProductTypes } from '../../../../api/products/types';

export type HomeLayoutProps = {
  goToProduct: (product: ProductTypes) => void;
};

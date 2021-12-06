import { ProductTypes } from '../../../../api/products/types';

export type ItemListProps = {
  items: {
    data: ProductTypes[];
    loading?: boolean;
    error?: string;
  };
  goToItem: (item: ProductTypes) => void;
  refreshList: () => void;
};

export type ItemTouchableProps = {
  rightPadding: boolean;
};

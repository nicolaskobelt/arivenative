import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { ProductTypes } from '../../../../api/products/types';
import ButtonBasic from '../../../../components/Button/Basic';
import { useCategoriesData, useProductsData } from '../../../../hooks/data';
import Categories from '../CategoryHeader';
import ItemList from '../ItemList';
import { HomeLayoutView, ButtonsContainer } from './styled';
import { HomeLayoutProps } from './types';

const HomeLayout: React.FC<HomeLayoutProps> = ({ goToProduct }) => {
  const [isSelected, setIsSelected] = useState<string>('all');
  const [filterProducts, setFilterProducts] = useState<[] | undefined>(
    undefined,
  );
  const {
    data: categories,
    loading,
    error,
  } = useCategoriesData(false, '10', true);
  const {
    data: items,
    loading: itemsLoading,
    error: itemsError,
  } = useProductsData(false, '10', filterProducts, true);

  const onPress = (item: ProductTypes) => {
    goToProduct(item);
  };

  useEffect(() => {
    const filterCat = categories?.subcategories?.find(
      (cat: { id: string }) => cat.id === isSelected,
    );
    if (filterCat) {
      setFilterProducts(filterCat.productsIds);
    }
    if (isSelected === 'all') {
      setFilterProducts(undefined);
    }
  }, [isSelected, categories]);

  const refresh = () => {
    // Refresh section
  };

  if (error || itemsError) {
    return null;
  }

  if (loading || itemsLoading) {
    return <ActivityIndicator />;
  }

  const { subcategories } = categories;

  return (
    <HomeLayoutView>
      <Categories categoryName={categories.name} imageUrl={categories.image} />
      <ButtonsContainer horizontal showsHorizontalScrollIndicator={false}>
        <ButtonBasic
          isSelected={isSelected === 'all'}
          key="all"
          press={() => setIsSelected('all')}>
          All Products
        </ButtonBasic>
        {subcategories.map((cat: any) => (
          <ButtonBasic
            isSelected={isSelected === cat.id}
            key={cat.id}
            press={() => setIsSelected(cat.id)}>
            {cat.name}
          </ButtonBasic>
        ))}
      </ButtonsContainer>
      <ItemList
        items={{ loading: false, data: items }}
        goToItem={onPress}
        refreshList={refresh}
      />
    </HomeLayoutView>
  );
};

export default HomeLayout;

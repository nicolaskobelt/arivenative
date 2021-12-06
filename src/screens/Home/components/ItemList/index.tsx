import React from 'react';
import ListScreenWrapper from '../../../../components/ListScreenWrapper';
import {
  Image,
  Item,
  ItemBrand,
  ItemName,
  ItemPrice,
  ListInnerView,
  TextContent,
} from './styled';
import { ItemListProps } from './types';

const ItemList: React.FC<ItemListProps> = ({
  items,
  goToItem,
  refreshList,
}) => {
  const renderContent = () => {
    const { loading, error, data } = items;

    if (loading) {
      return null;
    }

    if (error) {
      return null;
    }

    return (
      <ListInnerView>
        {data.map((item, index) => (
          <Item
            key={`${item?.name}-${item?.id}`}
            onPress={() => goToItem(item)}
            rightPadding={index % 2 === 0}>
            <>
              <Image source={{ uri: item.imageUrl }} />
              <TextContent>
                <ItemBrand>{item.brand.name}</ItemBrand>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>{`${item.price} €`}</ItemPrice>
              </TextContent>
            </>
          </Item>
        ))}
      </ListInnerView>
    );
  };
  return (
    <ListScreenWrapper {...refreshList}>{renderContent()}</ListScreenWrapper>
  );
};

export default ItemList;

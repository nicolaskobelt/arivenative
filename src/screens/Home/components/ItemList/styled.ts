import styled from '@emotion/native';
import { BoldText } from '../../../../components/Text/Texts';
import { ItemTouchableProps } from './types';

export const Item = styled.TouchableOpacity<ItemTouchableProps>`
  width: 50%;
  display: flex;
  align-items: center;
  ${({ rightPadding }) =>
    rightPadding ? 'padding-right: 10px;' : 'padding-left: 10px;'}
`;

export const Image = styled.Image`
  width: 100%;
  height: 140px;
  border-radius: 10px;
`;

export const TextContent = styled.View`
  height: auto;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ItemBrand = styled(BoldText)`
  font-size: 16px;
  color: ${({ theme }) => theme.color.gray400};
  margin-bottom: 5px;
`;

export const ItemName = styled(BoldText)`
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 5px;
`;

export const ItemPrice = styled(BoldText)`
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
`;

export const ListInnerView = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`;

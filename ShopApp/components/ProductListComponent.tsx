import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import ProductListItemComponent from './ProductListItemComponent';
import IProduct from '../models/IProduct';

interface ProductListComponentProps {
  products: IProduct[];
  onProductPress: (id: string) => void;
  changeProductIsFavorite: (id: string, isFavorite: boolean) => void;
  changeProductIsInCart: (id: string, isInCart: boolean) => void;
}

export default function ProductListComponent({ products, onProductPress, changeProductIsFavorite, changeProductIsInCart }: ProductListComponentProps) {
  const renderItem: ListRenderItem<IProduct> = ({ item }) => (
    <ProductListItemComponent
      product={item}
      onPress={onProductPress}
      onHeartPress={changeProductIsFavorite}
      onCartPress={changeProductIsInCart} />
  );

  return (
    <FlatList
      data={products}
      contentContainerStyle={{ paddingVertical: 10 }}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false} />
  );
}
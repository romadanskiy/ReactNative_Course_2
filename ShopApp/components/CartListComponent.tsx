import React from 'react';
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native';

import CartListItemComponent from './CartListItemComponent';
import ICountedProduct from '../models/ICountedProduct';

interface CartListComponentProps {
  products: ICountedProduct[];
  onProductPress: (id: string) => void;
  removeProductFromCart: (id: string) => void;
  decreaseProductCount: (id: string) => void;
  increaseProductCount: (id: string) => void;
}

export default function CartListComponent({ products, onProductPress, removeProductFromCart, decreaseProductCount, increaseProductCount }: CartListComponentProps) {
  const renderItem: ListRenderItem<ICountedProduct> = ({ item }) => (
    <CartListItemComponent
      countedProduct={item}
      onPress={onProductPress}
      onBinPress={removeProductFromCart}
      onMinusPress={decreaseProductCount}
      onPlusPress={increaseProductCount} />
  );

  const ItemSeparator = () => <View style={styles.itemDivider} />;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.product.id}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false} />
  );
}

const styles = StyleSheet.create({
  itemDivider: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'lightgray',
  },
});
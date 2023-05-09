import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite'

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import RootStackParamList from './RootStackParamList';
import ProductListComponent from '../components/ProductListComponent';
import { useStore } from '../stores/StoreHooks';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductList'>;

const ProductListScreen = observer(() => {
  const productStore = useStore('productStore');
  const cartStore = useStore('cartStore');

  const navigation = useNavigation<NavigationProp>();

  const openProduct = (id: string) => {
    navigation.navigate('Product', { id: id });
  }

  const changeProductIsFavorite = (id: string, isFavorite: boolean) => {
    productStore.changeIsFavorite(id, isFavorite);
  }

  const changeProductIsInCart = (id: string, isInCart: boolean) => {
    productStore.changeIsInCart(id, isInCart);
    if (isInCart)
      cartStore.addProductToCart(id);
    else
      cartStore.removeProductFromCart(id);
  }

  const products = [...productStore.products];

  return (
    <View style={styles.container}>
      <ProductListComponent
        products={products}
        onProductPress={openProduct}
        changeProductIsFavorite={changeProductIsFavorite}
        changeProductIsInCart={changeProductIsInCart} />
    </View>
  );
});

export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
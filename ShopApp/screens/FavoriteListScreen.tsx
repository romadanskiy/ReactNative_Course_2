import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import RootStackParamList from './RootStackParamList';
import ProductListComponent from '../components/ProductListComponent';
import { useStore } from '../stores/StoreHooks';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductList'>;

const FavoriteListScreen = observer(() => {
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

  const products = [...productStore.products].filter(product => product.isFavorite);

  return (
    <View style={styles.container}>
      {
        products.length < 1 &&
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyListHeader}>No Favorites Yet</Text>

          <Text style={styles.emptyListSubheader}>
            You can add a product to your favorites by clicking <Icon name='heart-outline' color={'#8a1041'} size={22} /> icon
          </Text>
        </View>
      }
      {
        products.length > 0 &&
        <ProductListComponent
          products={products}
          onProductPress={openProduct}
          changeProductIsFavorite={changeProductIsFavorite}
          changeProductIsInCart={changeProductIsInCart} />
      }
    </View >
  );
});

export default FavoriteListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListHeader: {
    fontSize: 26,
    color: 'black',
  },
  emptyListSubheader: {
    fontSize: 22,
    textAlign: 'center',
    padding: 40,
  },
});
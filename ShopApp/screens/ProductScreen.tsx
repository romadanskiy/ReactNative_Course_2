import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { observer } from 'mobx-react-lite'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

import RootStackParamList from './RootStackParamList';
import NotFoundProductComponent from '../components/NotFoundProductComponent';
import ProductComponent from '../components/ProductComponent';
import { useStore } from '../stores/StoreHooks';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Product'>;
type ProductRouteProp = RouteProp<RootStackParamList, 'Product'>;

const ProductScreen = observer(() => {
  const productStore = useStore('productStore');
  const cartStore = useStore('cartStore');

  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<ProductRouteProp>();

  const id = route.params.id;
  const product = productStore.getProduct(id);

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

  const getIcon = (name: string, focused: boolean) => {
    let iconName = focused ? name : name + "-outline";
    return (
      <Icon name={iconName} color={'#8a1041'} size={25} />
    );
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        if (product !== undefined)
          return (
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.heartButton}
                onPress={() => changeProductIsFavorite(product.id, !product.isFavorite)}>
                {getIcon('heart', product.isFavorite)}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => changeProductIsInCart(product.id, !product.isInCart)}>
                {getIcon('cart', product.isInCart)}
              </TouchableOpacity>
            </View>
          )
      },
    });
  }, [navigation, product?.isFavorite, product?.isInCart]);

  return (
    <View style={styles.container}>
      {product === undefined && <NotFoundProductComponent />}
      {product !== undefined && <ProductComponent product={product} />}
    </View>
  )
});

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
  },
  heartButton: {
    marginRight: 10,
  },
});
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite'

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import RootStackParamList from './RootStackParamList';
import CartListComponent from '../components/CartListComponent';
import IconComponent from '../components/IconComponent';
import { useStore } from '../stores/StoreHooks';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cart'>;

const CartScreen = observer(() => {
  const cartStore = useStore('cartStore');
  const productStore = useStore('productStore');

  const navigation = useNavigation<NavigationProp>();

  const round = (num: number) => {
    return num.toFixed(2);
  }

  const openProduct = (id: string) => {
    navigation.navigate('Product', { id: id });
  }

  const removeProductFromCart = (id: string) => {
    productStore.changeIsInCart(id, false);
    cartStore.removeProductFromCart(id);
  }

  const decreaseProductCount = (id: string) => {
    cartStore.decreaseCount(id);
  }

  const increaseProductCount = (id: string) => {
    cartStore.increaseCount(id);
  }

  const products = [...cartStore.products];

  return (
    <View style={styles.container}>
      {
        products.length < 1 &&
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartHeader}>Cart Is Empty</Text>

          <Text style={styles.emptyCartSubheader}>
            You can add a product to your cart by clicking <IconComponent name='cart' size={22} color={'#8a1041'} isOutline={true} /> icon
          </Text>
        </View>
      }
      {
        products.length > 0 &&
        <View style={{ flex: 1 }}>
          <View style={styles.carList}>
            <CartListComponent
              products={products}
              onProductPress={openProduct}
              removeProductFromCart={removeProductFromCart}
              decreaseProductCount={decreaseProductCount}
              increaseProductCount={increaseProductCount} />
          </View>

          <View style={styles.cartFooter}>
            <Text style={styles.totalPrice}>Total</Text>

            <Text style={styles.totalPrice}>${round(cartStore.totalPrice())}</Text>

            <TouchableOpacity>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    </View >
  );
});

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartHeader: {
    fontSize: 26,
    color: 'black',
  },
  emptyCartSubheader: {
    fontSize: 22,
    textAlign: 'center',
    padding: 40,
  },
  carList: {
    flex: 1,
  },
  cartFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderColor: 'lightgray',
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  totalPrice: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  buyButtonText: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#8a1041',
    fontWeight: 'bold',
  }
});
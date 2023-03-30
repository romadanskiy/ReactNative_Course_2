import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import productImages from '../images/images';
import IProduct from '../models/IProduct';

interface ProductListItemComponentProps {
  product: IProduct;
  onPress: (id: string) => void;
  onHeartPress: (id: string, isFavorite: boolean) => void;
  onCartPress: (id: string, isInCart: boolean) => void;
}

export default function ProductListItemComponent({ product, onPress, onHeartPress, onCartPress }: ProductListItemComponentProps) {
  const getIcon = (name: string, focused: boolean) => {
    let iconName = focused ? name : name + "-outline";
    return (
      <Icon name={iconName} color={'#8a1041'} size={25} />
    );
  }

  return (
    <TouchableOpacity
      style={styles.productListItem}
      onPress={() => onPress(product.id)}>
      <View style={styles.row}>
        <Image
          style={styles.productImage}
          source={productImages[product.id as keyof typeof productImages]} />

        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>

          <View style={[styles.row, { alignItems: 'center' }]}>
            <Text style={styles.productPrice}>${product.price}</Text>

            <TouchableOpacity style={styles.heartButton}
              onPress={() => onHeartPress(product.id, !product.isFavorite)}>
              {getIcon('heart', product.isFavorite)}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onCartPress(product.id, !product.isInCart)}>
              {getIcon('cart', product.isInCart)}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productListItem: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'gray',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
  productInfo: {
    flex: 1,
    padding: 10,
  },
  productName: {
    fontSize: 18,
    color: 'black',
    marginBottom: 'auto',
  },
  productPrice: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 'auto',
  },
  row: {
    flexDirection: 'row',
  },
  productImage: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
  heartButton: {
    marginRight: 10,
  },
});
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

import IconComponent from './IconComponent';
import productImages from '../images/images';
import ICountedProduct from '../models/ICountedProduct';

interface CartListItemComponentProps {
  countedProduct: ICountedProduct;
  onPress: (id: string) => void;
  onBinPress: (id: string) => void;
  onMinusPress: (id: string) => void;
  onPlusPress: (id: string) => void;
}

export default function ProductListItemComponent({ countedProduct, onPress, onBinPress, onMinusPress, onPlusPress }: CartListItemComponentProps) {
  const round = (num: number) => {
    return num.toFixed(2);
  }

  return (
    <TouchableOpacity
      style={styles.cartListItem}
      onPress={() => onPress(countedProduct.product.id)}>
      <View style={styles.row}>
        <Image
          style={styles.productImage}
          source={productImages[countedProduct.product.id as keyof typeof productImages]} />

        <View style={styles.productInfo}>
          <Text style={styles.productName}>{countedProduct.product.name}</Text>

          <View style={styles.centredRow}>
            <Text style={styles.productPrice}>${round(countedProduct.product.price * countedProduct.count)}</Text>

            <View style={styles.centredRow}>
              <TouchableOpacity
                onPress={() => onMinusPress(countedProduct.product.id)}>
                <IconComponent name='minus' size={25} />
              </TouchableOpacity>

              <View style={styles.productCountContainer}>
                <Text style={styles.productCount}>{countedProduct.count}</Text>
              </View>

              <TouchableOpacity
                onPress={() => onPlusPress(countedProduct.product.id)}>
                <IconComponent name='plus' size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.removeFromCartButton}
            onPress={() => onBinPress(countedProduct.product.id)}>
            <IconComponent name='trash-can' size={25} isOutline={true} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartListItem: {
    padding: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    color: 'black',
    marginBottom: 'auto',
  },
  productPrice: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 'auto',
  },
  productCountContainer: {
    width: 45,
    alignItems: 'center',
  },
  productCount: {
    fontSize: 18,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
  },
  centredRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  removeFromCartButton: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
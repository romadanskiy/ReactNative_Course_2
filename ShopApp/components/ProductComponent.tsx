import React from 'react';
import { StyleSheet, Text, ScrollView, Image, View } from 'react-native';

import productImages from '../images/images';
import IProduct from '../models/IProduct';

interface ProductComponentProps {
  product: IProduct;
}

export default function ProductComponent({ product }: ProductComponentProps) {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          source={productImages[product.id as keyof typeof productImages]} />
      </View>

      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>

        <Text style={styles.productPrice}>${product.price}</Text>

        <Text style={styles.productDescriptionHeader}>Description</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  productImageContainer: {
    alignItems: 'center',
  },
  productImage: {
    width: 350,
    height: 350,
  },
  productInfo: {
    padding: 20,
  },
  productName: {
    fontSize: 22,
    color: 'black',
    marginBottom: 20,
  },
  productPrice: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  productDescriptionHeader: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 18,
    color: 'black',
  },
  goBackIcon: {
    margin: 5,
  }
});
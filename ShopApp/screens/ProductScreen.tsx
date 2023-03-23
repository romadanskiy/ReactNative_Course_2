import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { observer } from 'mobx-react-lite'

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

import RootStackParamList from './RootStackParamList';
import { useStore } from '../stores/StoreHooks';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Product'>;
type ProductRouteProp = RouteProp<RootStackParamList, 'Product'>;

const ProductScreen = observer(() => {
  const productStore = useStore('productStore');

  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<ProductRouteProp>();

  const id = route.params.id;

  return (
    <View style={styles.container}>
      <Text>Product</Text>

      <Button
        title="Go back"
        onPress={() => navigation.goBack()} />
    </View >
  );
});

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
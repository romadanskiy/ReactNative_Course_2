import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite'

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import RootStackParamList from './RootStackParamList';
import { useStore } from '../stores/StoreHooks';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductList'>;

const ProductListScreen = observer(() => {
  const productStore = useStore('productStore');

  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text>Product List</Text>
    </View >
  );
});

export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
});
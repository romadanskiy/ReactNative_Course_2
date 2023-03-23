import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite'

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import RootStackParamList from './RootStackParamList';
import { useStore } from '../stores/StoreHooks';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cart'>;

const CartScreen = observer(() => {
  const logStore = useStore('cartStore');

  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text>Cart</Text>
      <Button
        title="Go to Product"
        onPress={() => navigation.navigate("Product", { id: 0 })} />
    </View >
  );
});

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
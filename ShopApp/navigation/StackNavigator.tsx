import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CartScreen from "../screens/CartScreen";
import FavoriteListScreen from "../screens/FavoriteListScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductScreen from "../screens/ProductScreen";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const CartStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}

const FavoriteListStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="FavoriteList" component={FavoriteListScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}

const ProductListStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}

export { CartStackNavigator, FavoriteListStackNavigator, ProductListStackNavigator };
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CartScreen from "../screens/CartScreen";
import FavoriteListScreen from "../screens/FavoriteListScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductScreen from "../screens/ProductScreen";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerShadowVisible: false,
  headerTitleAlign: 'center' as 'center',
};

const CartStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitle: "Cart",
        }} />

      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          headerTitle: "",
        }} />
    </Stack.Navigator>
  );
}

const FavoriteListStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="FavoriteList"
        component={FavoriteListScreen}
        options={{
          headerTitle: "Favorites",
        }} />

      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          headerTitle: "",
        }} />
    </Stack.Navigator>
  );
}

const ProductListStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{
          headerTitle: "8BitDo",
        }} />

      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          headerTitle: "",
        }} />
    </Stack.Navigator>
  );
}

export { CartStackNavigator, FavoriteListStackNavigator, ProductListStackNavigator };
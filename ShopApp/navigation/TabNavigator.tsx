import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { observer } from 'mobx-react-lite'

import { CartStackNavigator, FavoriteListStackNavigator, ProductListStackNavigator } from "./StackNavigator";
import IconComponent from "../components/IconComponent";
import { useStore } from '../stores/StoreHooks';

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerShown: false,
  tabBarLabel: () => null,
  tabBarActiveTintColor: '#8a1041',
  tabBarBadgeStyle: {
    backgroundColor: '#0b0d9d'
  },
};

const BottomTabNavigator = observer(() => {
  const cartStore = useStore('cartStore');
  const productInCartCount = cartStore.totalCount();

  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen
        name="ProductListTab"
        component={ProductListStackNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (<IconComponent name='home' size={size} color={color} isOutline={!focused} />),
        }} />

      <Tab.Screen
        name="FavoriteListTab"
        component={FavoriteListStackNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (<IconComponent name='heart' size={size} color={color} isOutline={!focused} />),
        }} />

      <Tab.Screen
        name="CartTab"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (<IconComponent name='cart' size={size} color={color} isOutline={!focused} />),
          tabBarBadge: productInCartCount > 0 ? productInCartCount : undefined,
        }} />
    </Tab.Navigator>
  );
});

export default BottomTabNavigator;
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  CartStackNavigator,
  FavoriteListStackNavigator,
  ProductListStackNavigator
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const getTabIcon = (name: string, focused: boolean, color: string, size: number) => {
  let iconName = focused ? name : name + "-outline";
  return (
    <Icon name={iconName} color={color} size={size} />
  );
}

const screenOptionStyle = {
  headerShown: false,
  tabBarLabel: () => null,
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen
        name="ProductListTab"
        component={ProductListStackNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => getTabIcon("home", focused, color, size),
        }} />

      <Tab.Screen
        name="FavoriteListTab"
        component={FavoriteListStackNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => getTabIcon("heart", focused, color, size),
        }} />

      <Tab.Screen
        name="CartTab"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => getTabIcon("cart", focused, color, size),
        }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
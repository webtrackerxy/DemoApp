import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingCartScreen from "../screens/ListingCartScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const CartNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Shopping Cart" component={ListingCartScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default CartNavigator;

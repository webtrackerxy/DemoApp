import React, { useContext, useEffect,useState } from "react";
import { FlatList, StyleSheet, View, Text, Button, Alert } from "react-native";

import Card from "../components/CartCard";
import colors from "../config/colors";
import Screen from "../components/Screen";
import {CartContext} from "../contexts/CartContext"

function ListingCartScreen({ navigation }) {

  const { cartState, addCartItem, removeCartItem, removeAllCartItem } = useContext(CartContext);

  return (
    <Screen style={styles.screen}>
      {

        cartState.items.map((item,i) => 
        
        <Card
          title={item.product.name}
          qty={item.count}
          onPress={() => navigation.navigate("ListingDetails", item.product)}
          increaseCart = {() => addCartItem(item.product)}
          reduceCart = {() => removeCartItem(item.product)}
          removeCart = {() => removeAllCartItem(item.product)}
        />

        ) 
      }
     
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingCartScreen;

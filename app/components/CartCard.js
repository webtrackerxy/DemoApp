import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Button } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Text from "./Text";
import colors from "../config/colors";


function Card({ title, subTitle, colour, qty,  onPress, increaseCart, reduceCart,  removeCart }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            Qty:{qty}
          </Text> 
          <View style={{flexDirection: "row" , marginLeft:5, alignSelf: "center", }}>
            <Button h={40} w={100} title="+ Qty" onPress={increaseCart} />
            <Button h={40} w={100} title="- Qty" onPress={reduceCart}/>
            <Button h={40} w={100} title="Remove from Cart" color="#841584" onPress={removeCart}/>
          </View>                                 
        </View>
      </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: 259,
    height: 413,
    alignSelf: "center",   
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;

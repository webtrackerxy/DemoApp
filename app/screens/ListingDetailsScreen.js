import React , {useContext} from "react";
import { View, Button, ScrollView, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import Text from "../components/Text";

import {CartContext} from "../contexts/CartContext"

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  const { addCartItem  } = useContext(CartContext);

  return (
    <ScrollView>
        <Image
          style={styles.image}
          tint="light"
          uri={listing.image}
        />
      <View style={styles.detailsContainer}>
        <Button
              onPress={() => addCartItem(listing, true)}
              title="Add to Cart"
              color="#841584"
          /> 
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subTitle}>{listing.description} </Text>
        <Text style={styles.price}>£{listing.price}</Text> 
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: 259,
    height: 413,
    alignSelf: "center",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ListingDetailsScreen;

import React, { useEffect, useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";

import {ProductContext} from "../contexts/ProductContext"
import {CartContext} from "../contexts/CartContext"


function ListingsScreen({ navigation }) {

  const productState  = useContext(ProductContext);
  const { addCartItem  } = useContext(CartContext);

  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  productState.items = getListingsApi.data;


  return (
    <>
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <FlatList
        data={productState.items}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            subTitle={"$" + item.price}
            colour={item.colour + " Colour"}
            imageUrl={item.img}
            onPress={() => navigation.navigate("ListingDetails", item)}
            addToCart = {() => addCartItem(item, true)}
            thumbnailUrl={item.img}
          />

        )}
      />
    </Screen>
    </>
  );
}


const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;

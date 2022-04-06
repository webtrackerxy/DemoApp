import React, { useEffect, useContext } from "react";
import { FlatList, StyleSheet, TextInput, Text, View } from "react-native";
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

  const { productState, setProductState, searchProduct}  = useContext(ProductContext);
  const { addCartItem  } = useContext(CartContext);

  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  productState.items = getListingsApi.data;

  const [searchText, setSearchText] = React.useState(" ");
  const [products, setProducts] = React.useState(productState.items);

  React.useEffect (() =>{
    searchTextFunction();
  },[searchText]);

  const searchTextFunction = () => {
      setProducts(productState.items.filter(item => item.title.includes(searchText)))
  }


  return (
    <>
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <View><Text>Search Product</Text></View>
      <TextInput
        style={styles.input}
        onChangeText={setSearchText}
        placeholder="SanDisk"
        value={searchText}        
      />
      <FlatList
        data={products.length >0  ? products : productState.items}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"£" + item.price}
            imageUrl={item.image}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ListingsScreen;

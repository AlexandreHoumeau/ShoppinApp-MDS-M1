import React from "react";
import { View, Text, FlatList } from "react-native";
import CardProduct from "../../Components/Card.Product";
import products from "../../Mocks/data";

const ProductList = (props) => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.photo}
        data={products}
        renderItem={({ item }) => (
          <CardProduct item={item} navigation={props.navigation} />
        )}
      />
    </View>
  );
};

export default ProductList;

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

export const headerLeft = (navigation) => (
  <TouchableOpacity
    onPress={() => navigation.toggleDrawer()}
    style={{ marginLeft: 20, flexDirection: "row" }}
  >
    <FontAwesome name="reorder" size={24} color="black" />
  </TouchableOpacity>
);

export const headerRight = (products, navigation) => (
  <TouchableOpacity
    style={{ marginRight: 20, flexDirection: "row" }}
    onPress={() => navigation.navigate("Cart")}
  >
    <View>
      <FontAwesome5 name="shopping-cart" size={24} color="black" />
      {products.length ? (
        <View
          style={{
            backgroundColor: "#764abc",
            height: 10,
            width: 10,
            borderRadius: 20,
            position: "absolute",
            right: -2,
          }}
        />
      ) : null}
    </View>
    {products.length ? (
      <Animatable.View
        animation="slideInRight"
        duration={300}
        style={{
          backgroundColor: "#764abc",
          paddingVertical: 5,
          paddingHorizontal: 10,
          marginLeft: 10,
          borderRadius: 20,
        }}
      >
        <Text>{Math.round(sum(products) * 100) / 100} $</Text>
      </Animatable.View>
    ) : null}
  </TouchableOpacity>
);

export const headerRightYourProducts = (products, navigation) => (
  <TouchableOpacity
    style={{ marginRight: 20, flexDirection: "row" }}
    onPress={() => navigation.navigate("EditProduct")}
  >
    <View>
      <FontAwesome5 name="plus" size={24} color="black" />
    </View>
  </TouchableOpacity>
);

function sum(products) {
  return products.reduce((a, b) => a + (b["price"] || 0), 0);
}

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

let startAncestor;
let startNode;

const CardProduct = ({ item, navigation }) => {
  const { photo, title, content, price } = item;
  return (
    <TouchableOpacity
      activeScale={0.9}
      tension={50}
      friction={7}
      useNativeDriver
      onPress={() => navigation.push("ProductOverview", { item })}
      style={styles.container}
    >
      <View style={styles.imgContainer}>
        <SharedElement id={`item.${item.id}.photo`}>
          <Image
            resizeMode="cover"
            source={{ uri: photo }}
            style={styles.image}
          />
        </SharedElement>
        <View style={styles.filter} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price} €</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
    height: 300,
    borderRadius: 5,
  },
  imgContainer: {
    flex: 1,
  },
  image: {
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  textContainer: {
    paddingVertical: 15,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  content: {
    fontWeight: "300",
    color: "gray",
  },
  priceContainer: {
    position: "absolute",
    backgroundColor: "#fff",
    padding: 20,
    bottom: 50,
    right: 10,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  price: {
    fontWeight: "bold",
  },
  filter: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    opacity: 0.2,
    borderRadius: 5,
  },
});

export default CardProduct;

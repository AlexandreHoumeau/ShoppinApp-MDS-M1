import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { connect } from 'react-redux';
import { addProduct } from "../../actions/cartActions";

const { height } = Dimensions.get("screen");

const ProductOverView = ({ route, addProduct, cart }) => {
  const { item } = route.params;
  const { photo, title, price, content } = route.params.item;

  const addItem = async () => {
    await addProduct(item)
  }
  return (
    <View style={styles.container}>
      <SharedElement style={styles.imgContainer} id={`item.${item.id}.photo`}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: photo }}
        />
      </SharedElement>
      <View style={styles.detailsContainer}>
        <Text style={styles.titleDescription}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.price}>US {price}$</Text>
      </View>

      <TouchableOpacity onPress={() => addItem()} style={styles.button}>
        <Text style={styles.textButton}>Buy now for {price}$</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  container: {
    borderRadius: 5,
  },
  imgContainer: {
    height: height / 4,
  },
  image: {
    resizeMode: "center",
    width: "100%",
    height: "100%",
  },
  content: {
    marginBottom: 10,
    fontWeight: "300",
    color: "gray",
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
  titleDescription: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailsContainer: {
    margin: 20,
  },
  button: {
    backgroundColor: "#49b6ff",
    padding: 15,
    margin: 30,
    borderRadius: 25,
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const mapState = (state) => ({
  cart: state.cart
})

export default connect(mapState, {addProduct})(ProductOverView);

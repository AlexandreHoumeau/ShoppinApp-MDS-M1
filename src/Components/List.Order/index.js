import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import { connect } from "react-redux";
import { deleteProduct } from "../../actions/cartActions";

const ListOrder = ({ item, cart, deleteProduct, delay }) => {
  const [numberOfItem, setNumberOfItem] = useState(1);
  useEffect(() => {
    updateData()
  }, [cart]);

  const updateData = async () => {
    const array = await cart.filter((product) => product.id === item.id);
    setNumberOfItem(array.length);
  }

  const deleteItem = async () => {
    const indexOfItem = cart.findIndex(({id}) => id === item.id)
    await deleteProduct(indexOfItem);
  };
  return (
    <Animatable.View animation="fadeInDown" duration={300} delay={delay} style={styles.order}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "gray", fontWeight: "bold", marginRight: 10 }}>
          {numberOfItem}
        </Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.price}>${Math.round((item.price * numberOfItem) * 100) / 100}</Text>
        <TouchableOpacity onPress={() => deleteItem()}>
          <FontAwesome name="trash-o" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  order: {
    marginHorizontal: 50,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
  },
  price: {
    marginRight: 20,
    fontWeight: "bold",
  },
});

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { deleteProduct })(ListOrder);

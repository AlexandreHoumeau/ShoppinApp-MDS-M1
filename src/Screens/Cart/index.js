import React, { useEffect, useState } from "react";
import {
  FlatList, StyleSheet, Text,
  TouchableOpacity, View
} from "react-native";
import { connect } from "react-redux";
import { addOrder } from "../../actions/orderActions";
import { deleteCart } from "../../actions/cartActions";
import ListOrder from "../../Components/List.Order";
import { Order } from "../../Models/Order";

const Cart = ({ cart, addOrder, deleteCart }) => {
  const [formatedData, setFormatedData] = useState([]);

  useEffect(() => {
    let array = cart.filter(
      (value, index) => cart.indexOf(value) === index
    );

    array.map((item) => {
      const arrayItem = cart.filter((product) => product.id === item.id)
      item.numberOfItems = arrayItem.length
    })
    setFormatedData(array);

  }, [cart]);

  const orderNow = () => {
    const newOrder = new Order({
      items: formatedData,
      totalCost: Math.round(sum(cart) * 100) / 100,
    })
    addOrder(newOrder)
    deleteCart()
  } 

  return (
    <View style={styles.container}>
      <View style={styles.totalContainer}>
        <Text style={styles.totlalText}>
          TOTAL:{" "}
          <Text style={styles.totalPrice}>
            {Math.round(sum(cart) * 100) / 100} $
          </Text>
        </Text>
        <TouchableOpacity onPress={() => orderNow()}>
          <Text style={styles.textButton}>Order Now</Text>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={formatedData}
          renderItem={({ item, index }) => <ListOrder delay={index * 100} item={item} />}
          keyExtractor={(item) => item?.id.toString()}
        />
      </View>
    </View>
  );
};

function sum(cart) {
  return cart.reduce((a, b) => a + (b["price"] || 0), 0);
}

const styles = StyleSheet.create({
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  totlalText: {
    fontWeight: "bold",
  },
  totalPrice: {
    color: "blue",
  },
  textButton: {
    color: "orange",
    fontWeight: "bold",
  },
});

// export default Cart;
const mapStateToProps = (state) => ({
  cart: state.cart,
});
export default connect(mapStateToProps, {addOrder, deleteCart})(Cart);

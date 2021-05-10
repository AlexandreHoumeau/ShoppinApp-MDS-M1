import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

const ItemsOrders = ({ item, delay }) => (
  <Animatable.View
    animation="fadeInDown"
    duration={300}
    delay={delay}
    style={styles.order}
  >
    <View style={{ flexDirection: "row" }}>
      <Text style={{ color: "gray", fontWeight: "bold", marginRight: 10 }}>
        {item.numberOfItems}
      </Text>
      <Text style={styles.title}>{item.title}</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={styles.price}>
        ${Math.round(item.price * item.numberOfItems * 100) / 100}
      </Text>
    </View>
  </Animatable.View>
);

const styles = StyleSheet.create({
  order: {
    marginHorizontal: 10,
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

export default ItemsOrders;

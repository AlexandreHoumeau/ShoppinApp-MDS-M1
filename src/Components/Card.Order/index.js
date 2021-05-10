import moment from "moment";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import ItemsOrder from "../Items.Order";

const CardOrder = ({ item }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(item);
  
  return (
    <View style={styles.card}>
      <View style={styles.headerCard}>
        <Text style={styles.price}>${item.totalCost}</Text>
        <Text style={styles.date}>
          {moment(item._createdAt).format("HH:mm MM/DD")}
        </Text>
      </View>
      {show ? (
        <Animatable.View animation="fadeIn" duration={300}>
          <FlatList 
            data={data.items}
            keyExtractor={(item) => item?.id.toString()}
            renderItem={({ item, index }) => (
              <ItemsOrder delay={index * 100} item={item} />
            )}
          />
        </Animatable.View>
      ) : null}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setShow(!show)}>
          <Text style={{ color: "#49b6ff", fontWeight: "bold" }}>
            {!show ? 'View more' : 'View less'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    color: "#ccc",
  },
  price: {
    fontWeight: "bold",
  },
  button: {
    padding: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    alignItems: "center",
  },
});

export default CardOrder;

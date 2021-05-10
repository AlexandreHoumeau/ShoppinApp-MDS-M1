import React from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import CardOrder from "../../Components/Card.Order";

const Orders = ({ orders }) => {
  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item?.id.toString()}
        renderItem={({ item }) => <CardOrder item={item} />}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  orders: state.order,
});

export default connect(mapStateToProps)(Orders);

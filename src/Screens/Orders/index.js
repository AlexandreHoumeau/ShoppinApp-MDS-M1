import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { fetchOrders } from "../../actions/orderActions";
import CardOrder from "../../Components/Card.Order";

const Orders = ({ orders, user, fetchOrders }) => {
  const [formatedData, setFormatedData] = useState([]);

  useEffect(() => {
    (async () => {
      await fetchOrders();
      setFormatedData(orders)
    })();
  }, [orders]);

  return (
    <View>
      <FlatList
        data={formatedData}
        keyExtractor={(item) => item?.id.toString()}
        renderItem={({ item }) => <CardOrder item={item} />}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  orders: state.order,
  user: state.user,
});

export default connect(mapStateToProps, { fetchOrders })(Orders);

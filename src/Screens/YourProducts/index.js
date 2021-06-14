import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import CardYourProduct from "../../Components/Card.YourProduct";
import { connect } from 'react-redux'

const YourProducts = ({ navigation, products, user }) => {
  const [formatedData, setFormatedData] = useState([]);

  useEffect(() => {
    const temp = [...products];
    const array = temp.filter((element) => element.user === user.id);
    setFormatedData(array);
  }, [products]);

  return (
    <FlatList
      data={formatedData}
      keyExtractor={(item) => item?.id.toString()}
      renderItem={({ item }) => <CardYourProduct item={item} navigation={navigation }/>}
    />
  );
};
const mapStateToProps = (state) => ({
  products: state.products,
  user: state.user
})
export default connect(mapStateToProps)(YourProducts);

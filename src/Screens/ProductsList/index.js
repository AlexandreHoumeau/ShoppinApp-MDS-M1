import React from "react";
import { View, Text, FlatList } from "react-native";
import CardProduct from "../../Components/Card.Product";
import { connect } from 'react-redux'

const ProductList = ({ navigation, products }) => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.photo}
        data={products}
        renderItem={({ item }) => (
          <CardProduct item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  products: state.products
})
export default connect(mapStateToProps)(ProductList);

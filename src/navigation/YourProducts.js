import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { connect } from "react-redux";
import EditProduct from "../Screens/EditProduct";
import YourProducts from "../Screens/YourProducts";
import { headerLeft, headerRight, headerRightYourProducts } from "./headers";

const Stack = createSharedElementStackNavigator();

const YourProductsView = ({ cart }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProductsList"
      options={({ navigation }) => ({
        title: "My Products",
        headerRight: () => headerRightYourProducts(cart, navigation),
        headerLeft: () => headerLeft(navigation),
      })}
      component={YourProducts}
    />
    <Stack.Screen
      name="EditProduct"
      component={EditProduct}
      options={() => ({
        title: "Edit Product",
      })}
    />
  </Stack.Navigator>
);

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(YourProductsView);

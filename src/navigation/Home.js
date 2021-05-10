import React from 'react'
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { connect } from "react-redux";
import Cart from "../Screens/Cart";
import ProductOverView from "../Screens/ProductOverview";
import ProductList from "../Screens/ProductsList";
import { headerLeft, headerRight } from './headers';

const Stack = createSharedElementStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: "#49b6ff",
    background: "#fcf7f8",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};
const Home = ({ cart, navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsList"
        options={({ navigation }) => ({
          title: "All Product",
          headerRight: () => headerRight(cart, navigation),
          headerLeft: () => headerLeft(navigation),
        })}
        component={ProductList}
      />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen
        name="ProductOverview"
        options={({ route, navigation }) => ({
          title: route.params.item.title,
          headerRight: () => headerRight(cart, navigation),
        })}
        component={ProductOverView}
        sharedElementsConfig={(route, otherRoute, showing) => {
          if (otherRoute.name === "ProductsList" && showing) {
            const { item } = route.params;
            return [
              {
                id: `item.${item.id}.photo`,
                animation: "move",
                resize: "auto",
                align: "center-top",
              },
            ];
          }
        }}
      />
    </Stack.Navigator>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

export default connect(mapStateToProps)(Home)
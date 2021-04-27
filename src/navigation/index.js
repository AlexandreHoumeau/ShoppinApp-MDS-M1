import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ProductList from "../Screens/ProductsList";
import ProductOverView from "../Screens/ProductOverview";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Button, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Cart from "../Screens/Cart";
const Stack = createSharedElementStackNavigator();

// const Stack = createStackNavigator();

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

function AppContainer() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsList"
          options={({ navigation }) => ({
            title: "All Product",
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={() => navigation.navigate("Cart")}
              >
                <FontAwesome5 name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            )
          })}
          component={ProductList}
        />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen
          name="ProductOverview"
          options={({ route }) => ({ title: route.params.item.title })}
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
    </NavigationContainer>
  );
}

export default AppContainer;

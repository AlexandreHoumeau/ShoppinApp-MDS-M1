import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { connect } from "react-redux";
import Login from "../Screens/Auth/Login";
import Register from "../Screens/Auth/Register";
import Home from "./Home";
import OrderView from "./OrderView";
import YourProducts from "./YourProducts";

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

const Drawer = createDrawerNavigator();

function AppContainer({ user }) {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator headerMode="none">
        {!user.isLoggedIn ? (
          AuthContainer()
        ) : (
          <Stack.Screen name="RootNavigation" component={RootNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AuthContainer = () => (
  <>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </>
);

const RootNavigation = () => (
  <Drawer.Navigator >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Orders" component={OrderView} />
    <Drawer.Screen name="Your Products" component={YourProducts} />
  </Drawer.Navigator>
);

const mapStateToProps = (state) => ({
  cart: state.cart,
  user: state.user,
});

export default connect(mapStateToProps)(AppContainer);

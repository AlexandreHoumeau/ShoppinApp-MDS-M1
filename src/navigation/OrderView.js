import React from 'react'
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { connect } from "react-redux";
import { headerLeft, headerRight } from './headers';
import Orders from '../Screens/Orders'

const Stack = createSharedElementStackNavigator();
const OrderView = ({ cart }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Orders"
      component={Orders}
      options={({ navigation }) => ({
        title: "Your orders",
        headerRight: () => headerRight(cart, navigation),
        headerLeft: () => headerLeft(navigation),
      })}
    />
  </Stack.Navigator>
)
const mapStateToProps = (state) => ({
  cart: state.cart
})
export default connect(mapStateToProps)(OrderView)
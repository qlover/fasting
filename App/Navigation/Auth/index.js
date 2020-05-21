import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class Auth extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="AuthLogin" component={() => <Text>Login Page!</Text>} />
        <Stack.Screen name="AuthEntry" component={() => <Text>Entry Page!</Text>} />
      </Stack.Navigator>
    );
  }
}

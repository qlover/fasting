import React, { Component } from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default class Home extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home1" component={() => <Text>Home1</Text>} />
        <Stack.Screen name="Home2" component={() => <Text>Home2</Text>} />
      </Stack.Navigator>
    );
  }
}

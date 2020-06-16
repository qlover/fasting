import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import Home from "../../../Containers/HomeTab/Home";

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Home1" component={() => <Text>Home1</Text>} />
    </Stack.Navigator>
  );
}

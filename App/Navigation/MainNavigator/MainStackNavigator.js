import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import MainTabNavigator from "./MainTabNavigator";
import OtherStackNavigator from "./OtherStackNavigator";
import ModalStackNavigator from "./ModalStackNavigator";

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeTab" component={MainTabNavigator} />
      <Stack.Screen name="Other" component={OtherStackNavigator} />
      <Stack.Screen name="Modal" component={ModalStackNavigator} />
    </Stack.Navigator>
  );
}

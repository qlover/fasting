import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

const Stack = createStackNavigator();

export default function LaunchStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LaunchPage1" component={() => <Text>LaunchPage1</Text> } />
      <Stack.Screen name="LaunchPage2" component={() => <Text>LaunchPage2</Text> } />
    </Stack.Navigator>
  );
}

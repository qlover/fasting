import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import My from "../../../Containers/HomeTab/My";

const Stack = createStackNavigator();

export default function MyStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My" component={My} />
      <Stack.Screen name="My1" component={() => <Text>My1</Text>} />
    </Stack.Navigator>
  );
}

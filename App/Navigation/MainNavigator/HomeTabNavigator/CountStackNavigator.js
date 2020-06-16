import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import Count from "../../../Containers/HomeTab/Count";

const Stack = createStackNavigator();

export default function CountStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Count" component={Count} />
      <Stack.Screen name="Count1" component={() => <Text>Count1</Text>} />
    </Stack.Navigator>
  );
}

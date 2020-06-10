import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

const Stack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="register" component={() => <Text>register</Text> } />
      <Stack.Screen name="login" component={() => <Text>login</Text> } />
    </Stack.Navigator>
  );
}

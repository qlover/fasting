import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import Home from "../../../Containers/HomeTab/Home";
import HeaderLeft from "../../../Components/Header/HeaderLeft";
import HeaderRight from "../../../Components/Header/HeaderRight";

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#0D6ACB",
            elevation: 0,
          },
          headerLeft: HeaderLeft,
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleAllowFontScaling: true,
          headerRight: HeaderRight,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Home1" component={Home} />
    </Stack.Navigator>
  );
}

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import My from "../../../Containers/HomeTab/My";
import HeaderLeft from "../../../Components/Header/HeaderLeft";
import HeaderRight from "../../../Components/Header/HeaderRight";

const Stack = createStackNavigator();

export default function MyStackNavigator() {
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
        }}
        name="My"
        component={My}
      />
      <Stack.Screen name="My1" component={My} />
    </Stack.Navigator>
  );
}

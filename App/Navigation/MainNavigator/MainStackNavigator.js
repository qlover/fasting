import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainTabNavigator from "./MainTabNavigator";
import OtherStackNavigator from "./OtherStackNavigator";
import ModalStackNavigator from "./ModalStackNavigator";
import AddPlanPage from "../../Containers/Pages/AddPlanPage";
import HeaderLeft from "../../Components/Header/HeaderLeft";
import HeaderRight from "../../Components/Header/HeaderRight";
import HeaderTitle from "../../Components/Header/HeaderTitle";

const Stack = createStackNavigator();
export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "标题title",
          headerStyle: {
            backgroundColor: "#0D6ACB",
          },
          headerLeft: HeaderLeft,
          headerTitle: HeaderTitle,
          headerRight: HeaderRight,
        }}
        name="HomeTab"
        component={MainTabNavigator}
      />
      <Stack.Screen name="AddPlan" component={AddPlanPage} />

      <Stack.Screen name="Other" component={OtherStackNavigator} />
      <Stack.Screen name="Modal" component={ModalStackNavigator} />
    </Stack.Navigator>
  );
}

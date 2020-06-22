import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabSubStackNavigator, { HomeTabNavigator } from "./HomeTabNavigator";
import OtherStackNavigator from "./OtherStackNavigator";
import ModalStackNavigator from "./ModalStackNavigator";
import AddPlanPage from "../../Containers/Pages/AddPlanPage";
import HeaderLeft from "../../Components/Header/HeaderLeft";
import HeaderRight from "../../Components/Header/HeaderRight";
import HeaderTitle from "../../Components/Header/HeaderTitle";

const Stack = createStackNavigator();
export default function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="AddPlan">
      <Stack.Screen
        // 取消首页tab 导航的 header, 下面的 HomeTabSubStackNavigator 有自定义 header
        options={{ headerShown: false }}
        name="HomeTab"
        component={HomeTabSubStackNavigator}
      />
      <Stack.Screen name="AddPlan" component={AddPlanPage} />

      <Stack.Screen name="Other" component={OtherStackNavigator} />
      <Stack.Screen name="Modal" component={ModalStackNavigator} />
    </Stack.Navigator>
  );
}

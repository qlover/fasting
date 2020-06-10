import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AddPlanPage from "../Pages/AddPlanPage";
import { Button } from "native-base";
const Stack = createStackNavigator();

export default class My extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button primary onPress={() => navigate("AddPlan")}>
          <Text> jump to Home </Text>
        </Button>
      </View>
    );
  }
}

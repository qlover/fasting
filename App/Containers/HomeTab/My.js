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
          <Text> jump to AddPlan </Text>
        </Button>
        <Button light><Text> Light </Text></Button>
        <Button primary><Text> Primary </Text></Button>
        <Button success><Text> Success </Text></Button>
        <Button info><Text> Info </Text></Button>
        <Button warning><Text> Warning </Text></Button>
        <Button danger><Text> Danger </Text></Button>
        <Button dark><Text> Dark </Text></Button>
      </View>
    );
  }
}

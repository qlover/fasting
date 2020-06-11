import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "native-base";

export default class My extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          primary
          style={{ marginHorizontal: 10, marginVertical: 5 }}
          onPress={() => navigate("AddPlan")}
        >
          <Text> jump to Home </Text>
        </Button>
      </View>
    );
  }
}

import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "native-base";

export default class My extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            padding: 8,
          }}
        >
          <Button
            mode="outlined"
            onPress={() => navigation.setOptions({ tabBarVisible: false })}
            style={{ margin: 8 }}
          >
            <Text>Hide tab bar</Text>
          </Button>
          <Button
            mode="outlined"
            onPress={() => navigation.setOptions({ tabBarVisible: true })}
            style={{ margin: 8 }}
          >
            <Text>Show tab bar</Text>
          </Button>
        </View>
        <Button
          primary
          style={{ marginHorizontal: 10, marginVertical: 5 }}
          onPress={() => navigation.navigate("AddPlan")}
        >
          <Text> jump to Home </Text>
        </Button>
      </View>
    );
  }
}

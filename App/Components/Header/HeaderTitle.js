import React from "react";
import Ionicons from "react-native-vector-icons/Feather";
import { View, Text } from "react-native";

export default function HeaderTitle(navigation) {
  console.log("headerTitle", navigation);
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 16, color: "#fff" }}>{navigation.children}</Text>
    </View>
  );
}

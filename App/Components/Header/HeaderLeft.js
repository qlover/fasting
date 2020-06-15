import React from "react";
import Ionicons from "react-native-vector-icons/Feather";
import { View } from "react-native";

export default function HeaderLeft() {
  return (
    <View style={{ marginLeft: 20 }}>
      <Ionicons name="menu" size={25} color="#fff" />
    </View>
  );
}

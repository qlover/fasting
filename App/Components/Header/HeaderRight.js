import React from "react";
import Ionicons from "react-native-vector-icons/Feather";
import { View } from "react-native";

export default function HeaderRight() {
  return (
    <View
      style={{
        width: 38,
        height: 38,
        marginRight: 20,
        borderWidth: 3,
        borderColor: "#fff",
        borderRadius: 38,
        alignItems: "center",
      }}
    >
      <Ionicons name="user" size={25} color="#fff" />
    </View>
  );
}

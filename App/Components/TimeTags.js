import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
} from "react-native";
import {
  ScrollView,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import { Tabs, Tab, Row } from "native-base";

const { width } = Dimensions.get("screen");

interface ButtonProps
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  title?: string;
}

export default class TimeTags extends React.Component<ButtonProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const { style } = this.props;

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      ></View>
    );
  }
}

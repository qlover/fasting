import React from "react";
import Modal from "react-native-modalbox";

import {
  Text,
  Button,
  StyleSheet,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
} from "react-native";
import {
  ScrollView,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Tabs, Tab, ScrollableTab } from "native-base";

const width = Dimensions.get("window").width;
const single_width = width * 0.28;

export interface TagObject {
  label: string;
  selected?: boolean;
}

export type SwitchCallbackHandler = (tag: TagObject, index: number) => void;

export interface TimeTagsProps {
  onSwitchTag?: SwitchCallbackHandler;
  tags?: Array<TagObject>;
}

export default class TimeTags extends React.Component<TimeTagsProps, any> {
  constructor(props) {
    super(props);
    // this.state = {
    //   tags: this.props.tags,
    // };
    this.toggleItem.bind(this);
  }

  toggleItem(item, index) {
    // let tags = JSON.parse(JSON.stringify(this.state.tags));
    // tags.forEach((v, i) => (v.selected = i == index));
    // this.setState({ tags: tags });
    // 点击回调
    this.props.onSwitchTag && this.props.onSwitchTag(item);
  }

  // UNSAFE_componentWillReceiveProps(newProps) {
  //   this.setState({ tags: newProps });
  // }

  render() {
    const _items = [];
    this.props.tags.map((item, index) => {
      _items.push(
        <TouchableOpacity
          key={index + item.label}
          activeOpacity={0.56}
          onPress={() => this.props.onSwitchTag(item, index)}
        >
          <View style={item.selected ? styles.activeTag : baseTagStyle}>
            <Text style={item.selected ? styles.activeText : baseTextStyle}>
              {item.label}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
    return <View style={styles.container}>{_items}</View>;
  }
}

const baseTagStyle = {
  width: single_width,
  borderWidth: 1,
  borderRadius: 50,
  marginBottom: 10,
  paddingVertical: 10,
  backgroundColor: "transparent",
  borderColor: "#eaeaf0",
};

const baseTextStyle = {
  textAlign: "center",
  color: "#0b1d42",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    flexGrow: 4,
    paddingHorizontal: 15,
  },
  activeTag: {
    ...baseTagStyle,
    backgroundColor: "#0177ff",
  },
  activeText: {
    ...baseTextStyle,
    color: "#fff",
  },
});

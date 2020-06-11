import React from "react";
import throttle from "lodash/throttle";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export type SwitchCallbackHandler = (item: any, index: number) => void;

export interface TimeTagsProps {
  onSwitchTag?: SwitchCallbackHandler;
  tags?: Array<any>;
  selectedIndex?: number;
}

export default class TimeTags extends React.Component<TimeTagsProps, any> {
  constructor(props) {
    super(props);
    this._onSwitchTagThrottle = throttle(this._onSwitchTag, 500);
  }

  _onSwitchTag(item, index) {
    this.props.onSwitchTag && this.props.onSwitchTag(item, index);
  }

  render() {
    const _items = [];
    const { selectedIndex } = this.props;
    this.props.tags.map((item, index) => {
      const selected = selectedIndex == index;
      _items.push(
        <TouchableOpacity
          key={String(index)}
          activeOpacity={0.56}
          onPress={() => this._onSwitchTagThrottle(item, index)}
        >
          <View style={selected ? styles.activeTag : baseTagStyle}>
            <Text style={selected ? styles.activeText : baseTextStyle}>
              {item}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
    return <View style={styles.container}>{_items}</View>;
  }
}
const single_width = Dimensions.get("window").width * 0.28;

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

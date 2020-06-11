import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from "react-native";
import { GUID } from "../Lib/Utilities";
import { baseCard, shadowCard } from "../Themes/AppStyles";

export class EmptyBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>empty box</Text>
      </View>
    );
  }
}

export type RowProps = {
  col?: number,
};

/**
 * @param props
 *  col
 *
 */
export class Row extends Component<RowProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const { col = 1, children, style } = this.props;
    const length = Array.isArray(children) ? children.length : 1;
    let _children = length === 1 ? [children] : children.slice(0);
    let _col = Math.max(col, length);

    // 如果子元素超过1个，并且指定长度超过子元素个数，那边填充子元素
    while (_col > length) {
      _children.push(<EmptyBox key={+GUID()} />);
      _col--;
    }

    return <View style={{ flexDirection: "row", ...style }}>{_children}</View>;
  }
}
export type CardBoxProps = {
  type?: "rect" | "row",
  center?: boolean,
  row?: boolean,
  shadow?: boolean,
  radius?: number,
  onPress?: (event: GestureResponderEvent) => void,
};
let timer = null;
export default class CardBox extends Component<CardBoxProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      height: "auto",
    };
  }

  componentDidMount() {
    // 如果为矩形则将高度设置成 1:1
    if (this.props.type === "rect") {
      timer = setTimeout(() => {
        this.box.measure((x, y, widht, height, left, top) => {
          this.setState({ height: widht });
        });
      });
    }
  }

  render() {
    const {
      center,
      row,
      type,
      style,
      children,
      shadow,
      radius,
      onPress,
    } = this.props;
    let _style = { ...baseCard, height: this.state.height };
    if (shadow) {
      _style = { ..._style, ...shadowCard };
    }
    if (radius || radius == 0) {
      _style.borderRadius = radius;
    }
    if (!type) {
      _style.flex = 1;
    }
    if (center) {
      _style.alignItems = "center";
    }
    // 普通的 view 是没有点击事件的，需要用 TouchableWithoutFeedback 包起来
    // TouchableWithoutFeedback 只能有一个子节点
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        {row ? (
          <Row ref={(box) => (this.box = box)} style={{ ..._style, ...style }}>
            {children}
          </Row>
        ) : (
          <View ref={(box) => (this.box = box)} style={{ ..._style, ...style }}>
            {children}
          </View>
        )}
      </TouchableWithoutFeedback>
    );
  }

  componentWillUnmount() {
    timer && clearTimeout(timer);
  }
}

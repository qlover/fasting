import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from "react-native";
import { GUID } from "../Lib/Utilities";
import AppStyles, { baseCard, shadowCard } from "../Themes/AppStyles";

export const RowStyle = AppStyles.screen.row;

export class EmptyBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={{ flex: 1 }}></View>;
  }
}

export type RowProps = {
  col?: number,
};

export default class Row extends Component<RowProps, any> {
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

    return <View style={{ ...RowStyle, ...style }}>{_children}</View>;
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
export class Col extends Component<CardBoxProps, any> {
  state = {
    height: "auto",
  };

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
      row,
      type,
      style,
      center,
      radius,
      shadow,
      onPress,
      children,
    } = this.props;
    let _style = {
      ...baseCard,
      ...style,
      borderRadius: radius || radius == 0 ? radius : baseCard.borderRadius,
      alignItems: center ? "center" : "flex-start",
    };

    if (shadow) {
      _style = { ..._style, ...shadowCard };
    }

    if (!type || type == "rect") {
      _style.flex = 1;
      _style.height = this.state.height;
    }
    // 普通的 view 是没有点击事件的，需要用 TouchableWithoutFeedback 包起来
    // TouchableWithoutFeedback 只能有一个子节点
    const R = row ? Row : View;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <R ref={(box) => (this.box = box)} style={_style}>
          {children}
        </R>
      </TouchableWithoutFeedback>
    );
  }

  componentWillUnmount() {
    timer && clearTimeout(timer);
  }
}

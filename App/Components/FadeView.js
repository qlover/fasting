import React from "react";
import { Animated, Text, View } from "react-native";

type FadeViewProps = {
  type: "FadeIn" | "FadeOut",
  onFadeOut: () => void,
};

const Fade = {
  FadeIn: { from: 0, to: 1 },
  FadeOut: { from: 1, to: 0 },
};
export const dur = 340;

export default class FadeView extends React.Component<FadeViewProps, any> {
  constructor(props) {
    super(props);
    const { type } = this.props;
    this.state = {
      fadeAnim: new Animated.Value(Fade[type].from), // 透明度初始值设为0
    };
  }

  fade(type) {
    // console.log(type, this.props.type);
    Animated.timing(
      // 随时间变化而执行动画
      this.state.fadeAnim, // 动画中的变量值
      {
        toValue: Fade[type].to, // 透明度最终变为1，即完全不透明
        duration: dur, // 让动画持续一段时间
      }
    ).start();
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.fade(props.type);
  }

  componentDidMount() {
    this.fade(this.props.type);
  }

  render() {
    const { fadeAnim } = this.state;

    console.log("render fadeAnim", fadeAnim._startingValue, fadeAnim._value);
    return (
      <Animated.View // 使用专门的可动画化的View组件
        style={{
          ...this.props.style,
          opacity: fadeAnim, // 将透明度指定为动画变量值
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

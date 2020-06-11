import Colors from './Colors'
// 某些组件的默认属性，比如进度条的一些默认属性，进度宽度，颜色等
// AnimatedCircularProgress 组件默认的属性
export const Progress = {
  size: 210,
  width: 6,
  backgroundWidth: 2,
  rotation: 0,
  tintColor: '#fff',
  fill: 35,
  backgroundColor: '#aaa',
  lineCap: 'round',
  dashedBackground: { width: 110, gap: 0 },
  dashedTint: { width: 110, gap: 0 },
}

// 主页的个人中心的头像
export const HomeLogo = {
  width: 110,
  height: 110,
  borderColor: '#000',
  borderRadius: 110,
  borderWidth: 2,
  overflow: 'hidden',
  overlayColor: Colors.transparent // android
}

export default {
  Progress,
  HomeLogo
}
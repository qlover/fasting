// react-native-push-notification 配置
import { isAndroid, isIos } from './platform';
import { NOTFI_ACTOIN_OK, NOTFI_ACTOIN_CANCLE } from './events'

// 注册通知动作
export const NotifActions = {
  [NOTFI_ACTOIN_OK] : {
    type: NOTFI_ACTOIN_OK,
    title: '确定' // 标题
  },
  [NOTFI_ACTOIN_CANCLE]: {
    type: NOTFI_ACTOIN_CANCLE,
    title: '清除' // 标题
  }
}

// 默认的 options 
export const NotifOptions = {
  onRegister: (token: { os: string; token: string }) => {
    console.log(`NotifService onRegister, current os is ${token.os}`)
  },
  // onNotification: (notification: PushNotification) => {
  onNotification: (notification) => {
    console.log('NotifService onNotification', notification)
    // console.log('NotifService onNotification')
    return false
  },
  senderID: 'qlover_sender_id',
  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true
  },
  // 初始通知是否应自动弹出
  // default: true
  popInitialNotification: true,

  /**
  * (optional) default: true
  * - Specified if permissions (ios) and token (android and ios) will requested or not,
  * - if not, you must call PushNotificationsHandler.requestPermissions() later
  */
  requestPermissions: true,
}

// android 和 ios 通用属性
export const commonProps = {
  // 通知正文标题部分
  title: 'Local Notification', // (optional)
  // 消息内容
  message: 'My Notification Message', // (required)
  // 播放音效
  playSound: false, // (optional) default: true
  // 音效名字
  soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
  number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
  // actions: '["确定", "清除"]', // (Android only) See the doc for notification actions to know more
}

export const ios = {
  alertAction: 'view', // (optional) default: view
  category: null, // (optional) default: null
  userInfo: null, // (optional) default: null (object containing additional notification data)
}

export const android = {
  // id: 1, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
  ticker: "My Notification Ticker", // (optional)
  autoCancel: true, // (optional) default: true
  largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
  smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
  bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
  subText: "This is a subText", // (optional) default: none
  color: "red", // (optional) default: system default
  vibrate: true, // (optional) default: true
  vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
  tag: 'some_tag', // (optional) add tag to message
  group: "group", // (optional) add group to message
  ongoing: false, // (optional) set whether this is an "ongoing" notification
}

const props = (): object => {
  if (isAndroid) {
    return {...commonProps, ...android}
  } else if(isIos) {
    return {...commonProps, ...ios}
  }
  return commonProps
}

export default props()
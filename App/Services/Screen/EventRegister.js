// 页面的事件注册服务
import PushNotification from "react-native-push-notification";
import { DeviceEventEmitter } from "react-native";
import { E_NOTIF_ACTION } from "../../Config/events";
import { identity } from "lodash/identity";

let notfis = [];

export default class EventRegister {
  constructor(options = {}) {
    this.listener = null;
  }

  /**
   * 通知事件注册
   */
  onNotificationActionReceived(type, handler = identity, context = null) {
    console.log("注册" + type);
    if (!actions.includes(type)) {
      throw new TypeError(
        "The notification event does not exist. Please register in config/notif.js first"
      );
    }
    notfis.push(type);
    if (!notfis.length) {
      return identity;
    }
    console.log("notfis", notfis);
    PushNotification.registerNotificationActions(notfis);
    this.listener = DeviceEventEmitter.addListener(
      E_NOTIF_ACTION,
      (action) => {
        console.log("Notification action received: " + action);
        const info = JSON.parse(action.dataJSON);
        if (info.action == type) {
          handler.call(context, info);
        }
      },
      context
    );
  }

  /**
   * 移除当前事件的监听
   */
  removeNotificationActionReceived() {
    this.listener && this.listener.remove && this.listener.remove();
    notfis.length = 0;
  }
}

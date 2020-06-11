import PushNotification from "react-native-push-notification";
import { GUID } from "../../Lib/Utilities";
import Props, { NotifOptions, NotifActions } from "../../Config/notif";
import { isAndroid, isIos } from "../../Config/platform";

/**
 * 事件动作类
 */
export class Action {
  constructor() {
    /**
     * 当前服务的注册事件
     * PS:事件名称是 Config/notif actions 中注册过的事件
     */
    this._actions = [];
  }

  add(type) {
    if (NotifActions[type] && !this._actions.includes(type)) {
      this._actions.push(NotifActions[type].title);
    }
  }

  size() {
    return this._actions.length;
  }

  getActions() {
    return this._actions;
  }

  /**
   * 这种格式返回 "["确定","清除"]"
   * @override
   */
  toString() {
    return this.size() ? JSON.stringify(this._actions) : "";
  }
}

// 设置通用属性,比如 通知正文标题部分或消息内容
// 并包括了当前系统的初始化属性
let _props = Props;

_props.id = GUID();

/**
 * 该通知支持 Android 和 IOS
 */
export default class ScreenNotifica {
  constructor(options = {}) {
    // 初始化全局配置
    options = { ...NotifOptions, options };

    // 强制重写点击事件 onNotification 方法
    // 因为不了监听动作事件
    options.onNotification = this.onNotification.bind(this);
    PushNotification.configure(options);

    this.events = []; // 事件列表
    /**
     * 调用方式
     *  1 本地通知(默认), 2 远程通知
     * @private
     * @memberof NotifService
     */
    this.TYPE = 1;
  }

  /**
   * 入口方法
   * @override
   * @param {object} detail
   */
  runNativeService(detail = {}) {
    if (isAndroid || isIos) {
      detail = { ..._props, ...detail };
      // 移除非法的 actions
      if (this.actions.size()) {
        detail.actions = this.actions.toString();
      }
      if (this.TYPE == 2) {
        // 调试调用时可以指定时间
        detail.date = detail.date || new Date();
        PushNotification.localNotificationSchedule(detail);
      } else {
        PushNotification.localNotification(detail);
      }
      return detail;
    }
    console.warn("current system not support the notif");
    return null;
  }

  /**
   * 启动远程通知
   */
  schedule() {
    this.TYPE = 2;
    return this;
  }

  /**
   * 启动本地通知
   */
  local() {
    this.TYPE = 1;
    return this;
  }

  /**
   * 延迟秒数
   * @param {number} [number] 延迟秒数,默认30秒
   */
  deffered(number = 30) {
    _props.date = new Date(Date.now() + number * 1000);
    return this.schedule();
  }

  /**
   * 检查权限
   * @param {object} detail 属性
   */
  checkPermission(cbk) {
    return PushNotification.checkPermissions(cbk);
  }

  /**
   * 清除指定的通知
   * @param {number} id
   */
  cancelNotifById(id) {
    PushNotification.cancelLocalNotifications({ id });
    return this;
  }

  /**
   * 清除所有通知
   */
  cancelAll() {
    PushNotification.cancelAllLocalNotifications();
    return this;
  }

  /**
   * 通知点击事件,相当于事件在这里委托
   *
   * 其中 notification.action 是当前的动作
   *
   * @override
   * @param {PushNotification} notification
   */
  onNotification(notification) {
    // 找到监听器,如果有则执行监听器,并保证该事件只会发生一次
    console.log(notification.id, this.events);
    // this.events = this.events.filter( e => e.title === notification.action && e.handler(notification, e) === false)
    this.events
      .filter((e) => e.title === notification.action)
      .forEach((e) => e.handler(notification, e));

    // 清除当前通知
    // this.cancelNotifById(notification.id)
  }

  /**
   * 通知动作注册
   */
  onAction(type, handler = identity) {
    if (!NotifActions[type]) {
      throw new TypeError(
        "The notification event does not exist. Please register in config/notif.js first"
      );
    }
    if (!this.actions) {
      this.actions = new Action();
    }
    this.actions.add(type);
    this.events.push({ ...NotifActions[type], handler });
    return this;
  }
}

ScreenNotifica.uuid = 0;

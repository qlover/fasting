import { PushNotification } from 'react-native-push-notification';
import { NotifOptions } from '../../Config/notif'
import Func from '../Func'

export default class NotifService {

  // private static service = null

  // constructor(options?: PushNotificationOptions) {
  constructor(options = {}) {
    // 初始化全局配置
    PushNotification.configure({...NotifOptions, options})

    // 设置通用属性,比如 通知正文标题部分或消息内容
    // 并包括了当前系统的初始化属性
    this.props = Props
  }

  static create(options = {}): NotifService  {
    if (options) {
      PushNotification.configure({...NotifOptions, options})
    }
    return NotifService.service || new NotifService(options)
  }

  /**
   * 启动本地通知
   * @param {object} detail 属性
   */
  localNotif(detail = {}) {
    PushNotification.localNotificationSchedule(detail)
  }

  /**
   * 启动远程通知
   * @param {object} detail 属性
   */
  scheduleNotif(detail = {}) {
    PushNotification.localNotification(detail)
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
    PushNotification.cancelLocalNotifications({id});
    return this
  }

  /**
   * 清除所有通知
   */
  cancelAll() {
    PushNotification.cancelAllLocalNotifications();
    return this
  }

  getLastId() {
    return ScreenNotifica.uuid++;
  }
}


ScreenNotifica.uuid = 0;
ScreenNotifica.service = null
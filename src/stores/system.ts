import {
  getMenuButtonBoundingClientRect,
  getSystemInfoSync,
  getDeviceInfo,
  getAppBaseInfo,
  getWindowInfo,
} from '@tarojs/taro';
import { defineStore } from 'pinia';

export default defineStore('system', {
  state() {
    return {
      // 胶囊按钮信息
      menuButton: getMenuButtonBoundingClientRect() || {},

      // 设备信息
      systemInfo: getSystemInfoSync() || {},

      // 设备基础信息
      deviceInfo: getDeviceInfo() || {},

      // 微信App信息
      appInfo: getAppBaseInfo() || {},

      // 屏幕信息
      windowInfo: getWindowInfo() || {},
    };
  },
});

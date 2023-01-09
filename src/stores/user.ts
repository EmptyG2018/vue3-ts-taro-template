import { defineStore } from 'pinia';

export default defineStore('user', {
  state() {
    return {
      // 登录凭证
      token: '',

      // 用户信息
      userInfo: {},
    };
  },
});

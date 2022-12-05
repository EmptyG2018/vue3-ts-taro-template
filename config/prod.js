module.exports = {
  env: {
    NODE_ENV: '"production"',
  },

  /**
   * 配置环境变量，需要使用JSON.stringify，
   * 官网地址：https://taro-docs.jd.com/docs/config-detail#env
   */
  defineConstants: {
    REQUEST_URL: JSON.stringify('http://192.168.31.160:8080/'),
    PRODUCTION: JSON.stringify(true),
  },
  mini: {},
  h5: {},
};

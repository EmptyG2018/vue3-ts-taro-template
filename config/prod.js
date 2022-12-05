module.exports = {
  env: {
    NODE_ENV: '"production"',
  },

  /**
   * 配置环境变量，需要使用JSON.stringify，
   * 官网地址：https://taro-docs.jd.com/docs/config-detail#env
   */
  defineConstants: {
    REQUEST_URL: JSON.stringify('【生成环境】http://111.111.11.111:8080/'),
    PRODUCTION: JSON.stringify(true),
  },
  mini: {},
  h5: {},
};

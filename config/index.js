const path = require('path');

const config = {
  projectName: 'template',
  date: '2022-12-3',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ['@tarojs/plugin-html'],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'vue3',
  compiler: 'webpack5',
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  sass: {
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
    '@components': path.resolve(__dirname, '..', 'src/components'),
    '@hooks': path.resolve(__dirname, '..', 'src/hooks'),
    '@services': path.resolve(__dirname, '..', 'src/services'),
    '@stores': path.resolve(__dirname, '..', 'src/stores'),
    '@utils': path.resolve(__dirname, '..', 'src/utils'),
    '@dicts': path.resolve(__dirname, '..', 'src/dicts'),
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-'],
        },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};

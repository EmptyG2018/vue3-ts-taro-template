export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/index/index',
    'pages/category/index',
    'pages/car/index',
    'pages/user/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: 'black',
    selectedColor: 'red',
    backgroundColor: '#fff',
    borderStyle: 'black',
    position: 'bottom',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
      },
      {
        pagePath: 'pages/category/index',
        text: '分类',
      },
      {
        pagePath: 'pages/car/index',
        text: '购物车',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
      },
    ],
  },
});

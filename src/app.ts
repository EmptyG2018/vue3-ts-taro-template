import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Button, Toast, InputNumber, Icon } from '@nutui/nutui-taro';

import './app.scss';

const App = createApp({
  onShow() {
    console.log('onShow');
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(createPinia()).use(Button).use(Toast).use(InputNumber).use(Icon);

export default App;

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import {
  Swipe,
  Row,
  Col,
  Checkbox,
  Tabs,
  TabPane,
  Sticky,
  Swiper,
  SwiperItem,
  Tag,
  Price,
  Button,
  Toast,
  InputNumber,
  Icon,
  Cell,
  CellGroup,
  Collapse,
  CollapseItem,
  Switch,
  CountDown,
  Dialog,
  Popup,
  OverLay,
  Empty,
  Navbar,
  Grid,
  GridItem,
} from '@nutui/nutui-taro';

import './app.scss';

const App = createApp({
  onShow() {
    console.log('onShow');
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(createPinia())
  .use(Swipe)
  .use(Row)
  .use(Col)
  .use(Checkbox)
  .use(Tabs)
  .use(TabPane)
  .use(Sticky)
  .use(Swiper)
  .use(SwiperItem)
  .use(Tag)
  .use(Price)
  .use(Button)
  .use(Toast)
  .use(InputNumber)
  .use(Icon)
  .use(Cell)
  .use(CellGroup)
  .use(Collapse)
  .use(CollapseItem)
  .use(Switch)
  .use(CountDown)
  .use(Dialog)
  .use(Popup)
  .use(OverLay)
  .use(Empty)
  .use(Navbar)
  .use(Grid)
  .use(GridItem);

export default App;

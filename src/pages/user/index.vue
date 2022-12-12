<template>
  <view class="main">个人中心</view>
  <view :style="{ marginTop: '100px' }"></view>

  <template v-if="loading1">
    loading:
    <view :style="{ marginTop: '10px' }">{{ loading1 }}</view>
  </template>
  <template v-if="error1">
    <view>error：{{ error1 }}</view>
  </template>
  <template v-if="data1">
    data:
    <view v-for="item in data1">{{ item.title }}</view>
  </template>

  <template v-if="loading2">
    loading:
    <view :style="{ marginTop: '10px' }">{{ loading2 }}</view>
  </template>
  <template v-if="error2">
    <view>error：{{ error2 }}</view>
  </template>
  <template v-if="data2">
    data:
    <view v-for="item in data2">{{ item.title }}</view>
  </template>

  <nut-button type="primary" :loading="loading1" @click="send1">
    欢迎使用NutUI 3.0
  </nut-button>

  <nut-button type="primary" :loading="loading2" @click="send2">
    欢迎使用NutUI 3.0
  </nut-button>
  <nut-button type="primary" :loading="loading" @click="send">
    欢迎使用NutUI 3.0
  </nut-button>

  <nut-button type="primary" :loading="loading" @click="debounce">
    防抖
  </nut-button>

  <view>{{ state ? '开' : '关' }}</view>
  <button @click="off">关</button>
  <button @click="on">开</button>

  <view :style="{ height: '1000px' }"> 1000 </view>
</template>

<script setup lang="ts">
import {
  useToggle,
  useRequest,
  useLoadRefresh,
  useLoadDrop,
  useDebounce,
} from '@/hooks';
import { GetDemo } from '@/services';

const { state, off, on } = useToggle(false);
// const debouncedFn = useDebounce(
//   () => {
//     console.log('触发啦');
//   },
//   { wait: 1000, maxWait: 5000 }
// );

const {
  run: service1,
  data: data1,
  loading: loading1,
  error: error1,
} = useRequest<API.GetDemo>(GetDemo, {
  immediate: false,
  defaultParams: {},
});

const {
  run: service2,
  data: data2,
  loading: loading2,
  error: error2,
} = useRequest<API.GetDemo>(GetDemo, {
  immediate: false,
  defaultParams: {},
});

const {
  list,
  paging,
  run: service3,
  data: data3,
  loading: loading3,
  error: error3,
} = useLoadDrop(service2, {
  immediate: true,
  pagingOptions: {
    currentField: 'current',
    sizeField: 'size',
  },
  defaultParams: {},
  defaultPaging: {},
});

const { run, loading } = useLoadRefresh(
  async () => {
    await service1();
    await service2();
  },
  {
    immediate: true,
  }
);

const send = () => {
  run({ pullDownRefresh: true });
};

const send1 = async () => {
  try {
    const runOk = await service1();
    console.log('sync runOk', runOk);
  } catch (err) {
    console.log('sync runError', err);
  }
};

const send2 = async () => {
  try {
    const runOk = await service2();
    console.log('sync runOk', runOk);
  } catch (err) {
    console.log('sync runError', err);
  }
};

const debounce = () => {
  console.log('wwww');
};
</script>

<style lang="scss">
@import './index.scss';
</style>

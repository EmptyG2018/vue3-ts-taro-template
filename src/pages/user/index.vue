<template>
  <view class="main">个人中心</view>
  <view :style="{ marginTop: '100px' }"></view>

  <template v-if="loading">
    loading:
    <view :style="{ marginTop: '10px' }">{{ loading }}</view>
  </template>
  <template v-if="error">
    <view>error：{{ error }}</view>
  </template>
  <template v-if="data">
    data:
    <view v-for="item in data">{{ item.title }}</view>
  </template>

  <nut-button type="primary" :loading="loading" @click="send">
    欢迎使用NutUI 3.0
  </nut-button>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { usePage, useRequest } from '@/hooks';
import { GetDemo } from '@/services';

const param = reactive<Record<string, any>>({ ine: '1111' });

const { run, loading, error } = usePage(
  async () => {
    await run(param);
  },
  {
    immediate: true,
    pullDownRefresh: true,
    onBefore() {
      console.log('onBefored');
    },
    onSuccess() {
      console.log('onSuccessd');
    },
    onError() {
      console.log('onErrord');
    },
    onFinally() {
      console.log('onFinally');
    },
  }
);

const send = () => {
  run({ pullDownRefresh: true });
};

// const { run, data, loading, error } = useRequest<API.GetDemo>(GetDemo, {
//   immediate: false,
//   defaultParams: {},
// });

// const send = async () => {
//   try {
//     const runOk = await run();
//     console.log('sync runOk', runOk);
//   } catch (err) {
//     console.log('sync runError', err);
//   }
// };
</script>

<style lang="scss">
@import './index.scss';
</style>

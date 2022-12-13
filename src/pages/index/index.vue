<template>
  <view class="main">
    <Title :msg="1" />
    <view class="line">
      {{ state.host }}
    </view>
    <view class="line">
      {{ state.version }}
    </view>
    <view class="line">
      <nut-button type="primary"> 欢迎使用NutUI 3.0 </nut-button>
    </view>

    <view class="line">
      <nut-button type="primary" @click="counterStore.increment">+</nut-button>
      <text>{{ counterStore.count }}</text>
      <nut-button type="primary" @click="counterStore.reduce"> - </nut-button>
    </view>

    <view class="line">
      <nut-button
        type="primary"
        @click="navigateTo({ url: '/pages/store/index' })"
      >
        跳转全局状态管理
      </nut-button>
    </view>

    <view class="line">
      <nut-button
        type="primary"
        @click="navigateTo({ url: '/pages/hook/index' })"
      >
        hook常见使用场景
      </nut-button>
    </view>

    <nut-toast
      v-model:visible="welcome"
      :msg="state.msg"
      :type="state.type"
      :cover="state.cover"
    />
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Title from '../../components/Title.vue';
import { useVisible } from '@hooks/index';
import { useCounterStore } from '@stores/counter';
import { navigateTo, useDidShow, useLoad } from '@tarojs/taro';
import wxConfig from '@/wx.config';

const { visible: welcome } = useVisible(false);
const counterStore = useCounterStore();

type StateProps = {
  version: string;
  host: string;
  msg: string;
  msg2: string;
  type: string;
  cover: boolean;
};

const state = reactive<StateProps>({
  version: wxConfig.version,
  host: wxConfig.host,
  msg: '欢迎使用 NutUI3.0 开发',
  msg2: '你成功了～',
  type: 'text',
  cover: false,
});

useLoad(() => {
  console.log('loaded');
});

useDidShow(() => {
  console.log('did showed');
});
</script>

<style lang="scss">
@import './index.scss';
</style>

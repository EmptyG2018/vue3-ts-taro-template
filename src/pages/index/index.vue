<template>
  <view class="index">
    <Title title="www" />
    <view class="line">
      {{ state.host }}
    </view>
    <view class="line">
      {{ state.version }}
    </view>
    <view class="line">
      <button type="primary" @click="counterStore.increment">+</button>
      <text>{{ counterStore.count }}</text>
      <button type="primary" @click="counterStore.reduce">-</button>
    </view>
    <view>
      <button @click="navigateTo({ url: '/pages/home/index' })">跳转</button>
    </view>
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', state.msg2, true)">
        欢迎使用NutUI 3.0
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
import useShow from '@hooks/useShow';
import { useCounterStore } from '@stores/counter';
import { navigateTo, useDidShow, useLoad } from '@tarojs/taro';
import wxConfig from '@/wx.config';

const { state: welcome, show: showWelcome } = useShow(false);
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

const handleClick = (type, msg, cover = false) => {
  showWelcome();
  state.msg2 = msg;
  state.type = type;
  state.cover = cover;
};
</script>

<style lang="scss">
@import './index.scss';
</style>

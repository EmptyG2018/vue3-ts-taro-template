<template>
  <view class="index">
    <view>
      <img src="" alt="" />
    </view>
    {{ state.msg }}
    <Demo />
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', state.msg2, true)"
        >点我</nut-button
      >

      <nut-button type="primary" @click="onAdd">window</nut-button>
    </view>
    <nut-toast
      v-model:visible="state.show"
      :msg="state.msg"
      :type="state.type"
      :cover="state.cover"
    />
  </view>
</template>

<script setup>
import { reactive } from 'vue';
import Demo from '@components/demo.vue';

const state = reactive({
  msg: '欢迎使用 NutUI3.0 开发小gweg',
  msg2: '你成功了～',
  type: 'text',
  show: false,
  cover: false,
});

const handleClick = (type, msg, cover = false) => {
  state.show = true;
  state.msg2 = msg;
  state.type = type;
  state.cover = cover;
};
</script>

<style lang="scss">
.index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

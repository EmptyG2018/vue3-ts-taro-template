<template>
  <view class="main">
    <view>{{ count }}</view>

    <nut-button @click="on">开</nut-button>
    <nut-button @click="off">关</nut-button>
    <nut-button @click="reverse">切换</nut-button>
  </view>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useToggle } from '@hooks/index';

let timer = null;

const count = ref(0);
const { state, off, on, reverse } = useToggle(false);

watch(state, (now) => {
  if (now) {
    clearInterval(timer);
    timer = setInterval(() => {
      count.value++;
    });
  } else {
    clearInterval(timer);
  }
});
</script>

<style lang="scss">
@import './index.scss';
</style>

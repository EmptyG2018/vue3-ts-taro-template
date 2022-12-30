<template>
  <SafeArea position="both">
    <view class="form-header">
      <ProcessCard :active-key="processActiveKey" :items="processes" />
    </view>
  </SafeArea>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { SafeArea } from '@components/index';
import ProcessCard from './components/ProcessCard.vue';
import type { ProcessItem } from './components/ProcessCard';

const processActiveKey = ref<string>('login');

const processes = ref<ProcessItem[]>([
  {
    icon: 'edit',
    key: 'info',
    label: '完善信息',
  },
  {
    icon: 'more-s',
    key: 'login',
    label: '登录',
  },
]);
</script>

<style lang="scss">
@import './index.scss';
</style>

<template>
  <SafeArea position="both">
    <view class="bg">
      <view class="header">
        <text class="header-title">欢迎登录柏溪福利小程序</text>
        <text class="header-desc">完善信息，我们将会为您提供专属服务</text>
      </view>
    </view>
    <view class="form-header">
      <view class="container-wrap">
        <ProcessCard
          :active-key="processActiveKey"
          active-color="#FB424E"
          :items="processes"
        />
      </view>
    </view>
    <view class="form-main">
      <view class="container-wrap">
        <InfoFormCard v-if="processActiveKey === 'info'" />
        <LoginFormCard v-if="processActiveKey === 'login'" />
      </view>
    </view>
    <view v-if="processActiveKey === 'info'" class="form-footer">
      <view class="container-wrap">
        <ActionBtn color="#FB424E" @click="handleSave">确认保存</ActionBtn>
      </view>
    </view>
  </SafeArea>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { SafeArea } from '@components/index';
import ProcessCard from './components/ProcessCard.vue';
import type { ProcessItem } from './components/ProcessCard';
import LoginFormCard from './components/LoginFormCard.vue';
import InfoFormCard from './components/InfoFormCard.vue';
import ActionBtn from './components/ActionBtn.vue';

const processActiveKey = ref<string>('info');

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

const handleSave = () => {
  processActiveKey.value = 'login';
};
</script>

<style lang="scss">
@import './index.scss';
</style>

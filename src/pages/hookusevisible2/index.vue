<template>
  <view class="main">
    <nut-empty v-if="visible3" image="network" description="无网络"></nut-empty>

    <nut-button @click="reverse3">empty 切换</nut-button>

    <nut-button @click="show1">popup</nut-button>

    <nut-button @click="show2">dialog</nut-button>

    <nut-popup
      v-model:visible="visible1"
      position="right"
      :style="{ width: '20%', height: '100%' }"
    />
    <nut-dialog
      v-model:visible="visible2"
      footer-direction="vertical"
      teleport="#app"
      title="组件调用"
      content="如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。"
    />
  </view>
</template>

<script setup lang="ts">
import { useVisible } from '@hooks/index';

const { visible: visible1, show: show1 } = useVisible(false);

const { visible: visible2, show: show2 } = useVisible(true);

const { visible: visible3, reverse: reverse3 } = useVisible(true);
</script>

<style lang="scss">
@import './index.scss';
</style>

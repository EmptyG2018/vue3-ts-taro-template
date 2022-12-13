<template>
  <view class="main">
    <nut-switch v-model="state"></nut-switch>

    <nut-button @click="on">开</nut-button>
    <nut-button @click="off">关</nut-button>
  </view>
</template>

<script setup lang="ts">
import { useToggle } from '@hooks/index';
const { state, off, on } = useToggle(false);
</script>

<style lang="scss">
@import './index.scss';
</style>

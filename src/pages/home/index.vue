<template>
  <view>{{ counterStore.count }}</view>
</template>

<script setup lang="ts">
import { useCounterStore } from '@stores/counter';

const counterStore = useCounterStore();
</script>

<style lang="less" scoped></style>

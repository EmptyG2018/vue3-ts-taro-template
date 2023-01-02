<template>
  <view :class="className('__goods-coupon')" />
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_goods');
</script>

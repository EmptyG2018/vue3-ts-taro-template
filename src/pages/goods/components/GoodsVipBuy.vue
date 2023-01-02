<template>
  <view :class="className('__goods-vip-buy')"></view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_goods');
</script>

<style lang="scss">
$module-prefix: '_goods';

.#{$module-prefix} {
  &__goods-vip-buy {
    width: 100%;
    height: 42px;
    background-color: red;
  }
}
</style>

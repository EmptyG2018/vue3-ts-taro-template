<template>
  <view :class="className('__goods-vip-buy')"></view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_goods-component');
</script>

<style lang="scss">
$module-prefix: '_goods-component';

.#{$module-prefix} {
  &__goods-vip-buy {
    width: 100%;
    height: 42px;
    border-radius: 4px;
    background-color: #c99e6b;
  }
}
</style>

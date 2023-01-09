<template>
  <view :class="className('__goods-ask-family')">
    <Container :gutter="[15, 10]">
      <GoodsCardHeader
        title="问大家"
        desc="(344)"
        arrow
        arrow-text="查看全部"
        @arrow-click="handleArrowClick"
      />
    </Container>
  </view>
</template>

<script setup lang="ts">
import { Container } from '@components/index';
import GoodsCardHeader from './GoodsCardHeader.vue';
import { useClassName } from '@hooks/index';

const { className } = useClassName('_goods-component');

const handleArrowClick = () => {
  console.log('this is arrow click.');
};
</script>

<style lang="scss">
$module-prefix: '_goods-component';

.#{$module-prefix} {
  &__goods-ask-family {
    background-color: #fff;
  }
}
</style>

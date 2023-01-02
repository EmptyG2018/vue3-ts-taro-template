<template>
  <view :class="className('__goods-carousel')">
    <nut-swiper
      :init-page="active"
      :pagination-visible="true"
      pagination-color="#426543"
      auto-play="3000"
    >
      <nut-swiper-item v-for="item in items">
        <img
          :class="className('__goods-carousel__swiper-item__img')"
          :src="item"
        />
      </nut-swiper-item>
      <template #page>
        <view :class="className('__goods-carousel__swiper-item__page')"
          >{{ active }}/4</view
        >
      </template>
    </nut-swiper>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_goods');

/**
 * @title 商品轮播组件
 * @param active 选中唯一键
 * @param items 商品轮播列表
 */
withDefaults(
  defineProps<{
    active: number;
    items: string[];
  }>(),
  {
    active: 0,
    items: () => [],
  }
);
</script>

<style lang="scss">
$module-prefix: '_goods';

.#{$module-prefix} {
  &__goods-carousel {
    &__swiper-item__img {
      display: block;
      width: 100%;
      height: 323px;
    }
  }
}
</style>

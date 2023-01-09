<template>
  <view :class="className('__goods-card-header')">
    <view :class="className('__goods-card-header__content')">
      <text :class="className('__goods-card-header__title')">{{ title }}</text>
      <text :class="className('__goods-card-header__desc')">{{ desc }}</text>
    </view>
    <view :class="className('__goods-card-header__extra')">
      <view
        v-if="arrow"
        :class="className('__goods-card-header__arrow')"
        @click="emits('arrow-click')"
      >
        <text :class="className('__goods-card-header__arrow__text')">{{
          arrowText
        }}</text>
        <nut-icon name="arrow-right" color="#818181" size="12" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';

const { className } = useClassName('_goods-component');

/**
 * @title 商品详情模块头部
 * @param title 标题
 * @param desc 描述
 * @param arrow 箭头
 * @param arrowText 箭头描述
 */
withDefaults(
  defineProps<{
    title: string;
    desc?: string;
    arrow: boolean;
    arrowText?: string;
  }>(),
  {
    desc: undefined,
    arrowText: '',
  }
);

const emits = defineEmits(['arrow-click']);
</script>

<style lang="scss">
$module-prefix: '_goods-component';

.#{$module-prefix} {
  &__goods-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__content {
      color: #2a2a2a;
    }
    &__title {
      font-size: 16px;
      font-weight: 600;
      margin-right: 4px;
    }
    &__desc {
      font-size: 14px;
    }
    &__arrow {
      display: flex;
      align-items: center;
      color: #9a9a9a;
      font-size: 12px;
      &__text {
        margin-right: 8px;
      }
    }
  }
}
</style>

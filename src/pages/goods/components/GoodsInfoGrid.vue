<template>
  <view :class="className('__goods-info-grid')">
    <Container :gutter="[10, 10]">
      <view :class="className('__goods-info-grid__wrap')">
        <nut-grid :border="false">
          <nut-grid-item v-for="item in items">
            <view class="goods-info-label">{{ item.label }}</view>
            <view class="goods-info-value">{{ item.value }}</view>
          </nut-grid-item>
        </nut-grid>
      </view>
    </Container>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';
import { Container } from '@components/index';

const { className } = useClassName('_goods-component');

type Item = {
  label: string;
  value: string;
};

/**
 * @title 商品图片详情组件
 * @param items 商品轮播列表
 */
withDefaults(
  defineProps<{
    items: Item[];
  }>(),
  {
    items: () => [],
  }
);
</script>

<style lang="scss">
$module-prefix: '_goods-component';

.#{$module-prefix} {
  &__goods-info-grid {
    background-color: #fff;
    &__wrap {
      background-color: #fff9ed;
      border-radius: 4px;
      .nut-grid-item__content {
        background: transparent;
        .goods-info-label {
          color: #9a9a9a;
          font-size: 12px;
          margin-bottom: 8px;
        }
        .goods-info-value {
          color: #2a2a2a;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

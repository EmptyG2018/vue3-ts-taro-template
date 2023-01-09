<template>
  <nut-swipe>
    <template #right>
      <nut-button
        :class="className('__car-item__action-btn')"
        shape="square"
        type="warning"
        @click="emits('extraClick', 'collection')"
        >移至收藏</nut-button
      >
      <nut-button
        :class="className('__car-item__action-btn')"
        shape="square"
        type="danger"
        @click="emits('extraClick', 'delete')"
        >删除</nut-button
      >
    </template>
    <view :class="className('__car-item')">
      <nut-row type="flex" align="start">
        <nut-col :class="className('__car-item__selection')" :span="2">
          <nut-checkbox
            :model-value="check"
            icon-size="18"
            @change="(state) => emits('checkChange', state)"
          />
        </nut-col>
        <nut-col :span="7">
          <image :class="className('__car-item__thumb')" :src="thumb" />
        </nut-col>
        <nut-col :class="className('__car-item__cell')" :span="15">
          <view :class="className('__car-item__cell__title')">{{ title }}</view>
          <view :class="className('__car-item__cell__tags')">
            <nut-tag round color="#F2F2F2" text-color="#999999">{{
              tag
            }}</nut-tag>
          </view>
          <view :class="className('__car-item__cell__price')">
            <nut-price :price="price" size="normal" :thousands="true" />
          </view>
          <view :class="className('__car-item__cell__amount-bar')">
            <input-number
              :model-value="amount"
              readonly
              @change="(state: number) => emits('amountChange', state)"
            />
          </view>
        </nut-col>
      </nut-row>
    </view>
  </nut-swipe>
  <view :class="className('__car-item__hairline')"></view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';
import { InputNumber } from '@components/index';

const { className } = useClassName('_mx');

/**
 * @title 购物车单行组件
 * @param check 选中状态
 * @param thumb 商品缩略图
 * @param title 商品标题
 * @param tag 商品标签
 * @param price 商品价格
 * @param amount 商品数量
 */
withDefaults(
  defineProps<{
    check: boolean;
    thumb: string;
    title: string;
    tag: string;
    price: number;
    amount: number;
  }>(),
  {
    check: false,
  }
);

/**
 * @title 自定义事件
 * @param extraClick 点击操作事件 (collection：收藏，delete：删除)
 * @param checkChange 选中切换事件
 * @param amountChange 数量改变事件
 */
const emits = defineEmits<{
  (e: 'extraClick', type: 'collection' | 'delete'): void;
  (e: 'checkChange', state: boolean): void;
  (e: 'amountChange', state: number): void;
}>();
</script>

<style lang="scss">
$module-prefix: '_mx';
.#{$module-prefix} {
  &__car-item {
    &__action-btn {
      height: 100%;
    }
    &__selection {
      display: flex;
      align-items: center;
    }
    &__thumb {
      display: block;
      width: 176rpx;
      height: 176rpx;
    }
    &__cell {
      &__title {
        margin: 0;
        padding: 0;
        font-size: 32rpx;
        color: #2a2a2a;
        font-weight: 600;
        line-height: 1.4;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        white-space: normal;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 12rpx;
      }
      &__tags {
        margin-bottom: 12rpx;
      }
      &__price {
        .nut-price--normal {
          font-size: 18px;
          font-weight: 600;
        }
      }
      &__amount-bar {
        position: absolute;
        bottom: 30rpx;
        right: 32rpx;
      }
    }
    &__hairline {
      width: 94%;
      height: 1px;
      background-color: #efefef;
      margin: 0 auto;
    }
  }
}
</style>

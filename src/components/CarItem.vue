<template>
  <nut-swipe>
    <template #right>
      <nut-button
        class="action-btn"
        shape="square"
        type="warning"
        @click="emits('extraClick', 'collection')"
        >移至收藏</nut-button
      >
      <nut-button
        class="action-btn"
        shape="square"
        type="danger"
        @click="emits('extraClick', 'delete')"
        >删除</nut-button
      >
    </template>
    <view class="car-item">
      <nut-row type="flex" align="start">
        <nut-col class="selection" :span="2">
          <nut-checkbox
            :model-value="check"
            icon-size="18"
            @change="(state) => emits('checkChange', state)"
          />
        </nut-col>
        <nut-col :span="7">
          <image class="thumb" :src="thumb" />
        </nut-col>
        <nut-col class="cell" :span="15">
          <view class="title">{{ title }}</view>
          <view class="tags">
            <nut-tag round color="#F2F2F2" text-color="#999999">{{
              tag
            }}</nut-tag>
          </view>
          <view class="price">
            <nut-price :price="price" size="normal" :thousands="true" />
          </view>
          <view class="amount_bar">
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
  <view class="hairline"></view>
</template>

<script setup lang="ts">
import { InputNumber } from '@components/index';

const props = withDefaults(
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
const emits = defineEmits<{
  (e: 'extraClick', type: 'collection' | 'delete'): void;
  (e: 'checkChange', state: boolean): void;
  (e: 'amountChange', state: number): void;
}>();
</script>

<style lang="scss">
.action-btn {
  height: 100%;
}

.car-item {
  position: relative;
  background-color: #fff;
  padding: 30rpx 32rpx;
  .selection {
    display: flex;
    align-items: center;
  }
  .thumb {
    display: block;
    width: 176rpx;
    height: 176rpx;
  }
  .cell {
    .title {
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
    .tags {
      margin-bottom: 12rpx;
    }
    .price {
      .nut-price--normal {
        font-size: 18px;
        font-weight: 600;
      }
    }
    .amount_bar {
      position: absolute;
      bottom: 30rpx;
      right: 32rpx;
    }
  }
}
.hairline {
  width: 94%;
  height: 1px;
  background-color: #efefef;
  margin: 0 auto;
}
</style>

<template>
  <view :class="className('__goods-info-card')">
    <GoodsHeader>
      <nut-price :price="299.0" />
      <nut-price
        :class="className('__goods-info-card__price-original')"
        :price="259.0"
        size="normal"
      />
      <template #extra>
        <ActionBtn icon="edit" title="转发" />
        <ActionBtn icon="edit" title="收藏" />
      </template>
    </GoodsHeader>
    <GoodsCoupon type="svip" desc="开通超级VIP，下单可省10元" />
    <GoodsDescribe title="柏溪赋活水精华三代">
      <template #desc>
        <view :class="className('__goods-info-card__desc-line')"
          >①清爽控油 轻盈蓬松</view
        >
        <view :class="className('__goods-info-card__desc-line')"
          >②平衡水油 抗菌消炎</view
        >
        <view :class="className('__goods-info-card__desc-line')"
          >③补水保湿 细腻肤质</view
        >
      </template>
    </GoodsDescribe>
    <SpecRadioGroup>
      <SpecRadio thumb="..." label="100ML" desc="￥210" value="1" />
      <SpecRadio thumb="..." label="200ML" desc="￥990" value="1" />
      <SpecRadio thumb="..." label="180ML" desc="￥270" value="1" />
    </SpecRadioGroup>
  </view>
</template>

<script setup lang="ts">
import { useClassName } from '@hooks/index';
import { ActionBtn, SpecRadioGroup, SpecRadio } from '@components/index';
import GoodsHeader from './GoodsHeader.vue';
import GoodsCoupon from './GoodsCoupon.vue';
import GoodsDescribe from './GoodsDescribe.vue';

const { className } = useClassName('_goods');
</script>

<style lang="scss">
$module-prefix: '_goods';

.#{$module-prefix} {
  &__goods-info-card {
    padding: 10px;
    background-color: #fff;
    border-radius: 4px;
  }
}
</style>

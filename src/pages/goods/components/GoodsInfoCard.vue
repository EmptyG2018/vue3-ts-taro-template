<template>
  <view :class="className('__goods-info-card')">
    <Section :margin="[0, 0, 10, 0]">
      <GoodsHeader>
        <nut-price :price="299.0" />
        <nut-price
          :class="className('__goods-info-card__price-original')"
          :price="259.0"
          size="normal"
        />
        <template #extra>
          <view :class="className('__goods-info-card__extra')">
            <ActionBtn
              :class="className('__goods-info-card__action')"
              icon="edit"
              title="转发"
              :size="10"
              :icon-size="14"
            />
            <ActionBtn
              :class="className('__goods-info-card__action')"
              icon="edit"
              title="收藏"
              :size="10"
              :icon-size="14"
            />
          </view>
        </template>
      </GoodsHeader>
    </Section>
    <Section :margin="[0, 0, 16, 0]">
      <GoodsCoupon arrow>
        <CouponTag :price="5" size="mini" style="margin-right: 10px" />
        <CouponTag :price="8" size="mini" style="margin-right: 10px" />
      </GoodsCoupon>
    </Section>
    <Section :margin="[0, 0, 20, 0]">
      <GoodsVipBuy type="svip" desc="开通超级VIP，下单可省10元" />
    </Section>
    <Section :margin="[0, 0, 16, 0]">
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
    </Section>
    <Section>
      <SpecRadioGroup
        v-model="wge"
        :class="className('__goods-info-card__spec-row')"
      >
        <view :class="className('__goods-info-card__spec-col')">
          <SpecRadio thumb="..." label="100ML" desc="￥210" value="1" />
        </view>

        <view :class="className('__goods-info-card__spec-col')">
          <SpecRadio thumb="..." label="200ML" desc="￥990" value="2" />
        </view>
        <view :class="className('__goods-info-card__spec-col')">
          <SpecRadio thumb="..." label="180ML" desc="￥270" value="3" />
        </view>
      </SpecRadioGroup>
    </Section>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useClassName } from '@hooks/index';
import {
  Section,
  ActionBtn,
  SpecRadioGroup,
  SpecRadio,
  CouponTag,
} from '@components/index';
import GoodsHeader from './GoodsHeader.vue';
import GoodsCoupon from './GoodsCoupon.vue';
import GoodsVipBuy from './GoodsVipBuy.vue';
import GoodsDescribe from './GoodsDescribe.vue';

const { className } = useClassName('_goods-component');

const wge = ref('1');
</script>

<style lang="scss">
$module-prefix: '_goods-component';

.#{$module-prefix} {
  &__goods-info-card {
    padding: 12px 10px;
    background-color: #fff;
    border-radius: 4px;
    &__price-original {
      margin-left: 16px;
      color: #2a2a2a;
    }
    &__extra {
      display: flex;
      padding: 0 5px;
    }
    &__action {
      margin-left: 20px;
    }
    &__desc-line {
      font-size: 12px;
      color: #2a2a2a;
      margin-bottom: 6px;
    }
    &__spec-row {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
    &__spec-col {
      box-sizing: border-box;
      width: 50%;
      margin-bottom: 10px;
      &:nth-child(odd) {
        padding-right: 7px;
      }
      &:nth-child(even) {
        padding-left: 7px;
      }
    }
  }
}
</style>

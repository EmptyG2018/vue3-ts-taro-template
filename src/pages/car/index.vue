<template>
  <view class="fixed-action__placeholder">
    <view class="fixed-action">
      <view class="fixed-action__title">共{{ goodsLen }}件商品</view>
      <view class="fixed-action__extra" @click="reverse">{{
        editing ? '完成' : '管理'
      }}</view>
    </view>
  </view>
  <view class="banner-popularize"></view>
  <view class="records-card">
    <CarItem
      v-for="goods in carGoodsData?.data || []"
      :key="goods.goodsId"
      :check="carCheck(goods)"
      :thumb="goods.thumb"
      :title="goods.goodsName"
      :tag="goods.specifications"
      :price="goods.price"
      :amount="goods.amount"
      @check-change="checkChange($event, goods)"
      @amount-change="amountChange($event, goods)"
      @extra-click="extraClick"
    />
  </view>
  <view class="fixed-extra__placeholder">
    <view class="fixed-extra">
      <nut-row
        class="fixed-extra__wrap"
        type="flex"
        align="center"
        justify="space-bewtween"
      >
        <nut-col :span="6">
          <nut-checkbox icon-size="18">全选</nut-checkbox>
        </nut-col>
        <nut-col :span="18">
          <view class="cashier">
            <view class="cashier-detailed" @click="cashierReverse">
              <view class="cashier-detailed__total"
                ><text class="cashier-detailed__total-label">总计:</text
                >￥0.00</view
              >
              <view class="cashier-detailed__discount">优惠明细</view>
            </view>
            <view class="cashier-detailed__collapse" @click="cashierReverse">
              <nut-icon name="arrow-up" size="10" />
            </view>
            <nut-button type="primary" :style="{ marginLeft: '10px' }"
              >去结算(0)</nut-button
            >
          </view>
        </nut-col>
      </nut-row>
    </view>
  </view>

  <nut-popup v-model:visible="cashierVisible" :z-index="10" position="bottom">
    <view class="cashier-popup">
      <view class="cashier-popup__header">
        <text class="cashier-popup__title">金额明细</text>
        <nut-icon
          class="cashier-popup__close"
          name="mask-close"
          color="#E8E8E8"
          size="16"
        />
      </view>
      <view class="cashier-popup__container">
        <nut-cell class="cell">
          <view class="cell-label">商品总额</view>
          <view class="cell-value">￥1523.45</view>
        </nut-cell>
        <nut-cell class="cell">
          <view class="cell-label">立减</view>
          <view class="cell-value">- ￥523.45</view>
        </nut-cell>
        <nut-cell class="cell">
          <view class="cell-label">优惠券</view>
          <view class="cell-value">- ￥100</view>
        </nut-cell>
        <nut-cell class="cell cell-footer">
          <view class="cell-label">优惠券</view>
          <view class="cell-value">- ￥100</view>
        </nut-cell>
      </view>
      <view class="cashier-popup__footer"></view>
    </view>
  </nut-popup>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
  useVisible,
  useToggle,
  useLoadRefresh,
  useRequest,
} from '@hooks/index';
import { CarItem } from '@components/index';
import { GetCarGoods, UpdateCarStatus } from '@services/index';

//
const { visible: cashierVisible, reverse: cashierReverse } = useVisible(false);

// 编辑状态
const { state: editing, reverse } = useToggle(false);

const { refresh: getCarGoodsRefresh, data: carGoodsData } = useRequest(
  GetCarGoods,
  {
    immediate: false,
  }
);

const { run: updateCardStatusRun, error: updateCardStatusError } = useRequest(
  UpdateCarStatus,
  {
    immediate: false,
    cache: false,
  }
);

useLoadRefresh(
  async () => {
    await getCarGoodsRefresh();
  },
  {
    immediate: true,
  }
);

const goodsLen = computed(() => {
  return (carGoodsData.value?.data || []).length;
});

const carCheck = (record: any) => {
  if (editing.value) {
    return true;
  } else {
    return record.check;
  }
};

const checkChange = async (check: boolean, record: any) => {
  await updateCardStatusRun();
  if (!updateCardStatusError.value) {
    record.check = check;
  }
};

const amountChange = async (amount: number, record: any) => {
  await updateCardStatusRun();
  if (!updateCardStatusError.value) {
    record.amount = amount;
  }
};

const extraClick = () => {
  console.log('xxxx');
};
</script>

<style lang="scss">
@import './index.scss';
</style>

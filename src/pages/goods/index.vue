<template>
  <nut-tabs v-model="tabActive">
    <nut-tabpane class="tab-pane" pane-key="goods" title="商品">
      <view class="section banner">
        <nut-swiper
          :init-page="page"
          :pagination-visible="true"
          pagination-color="#426543"
          auto-play="3000"
        >
          <nut-swiper-item v-for="img in imgs">
            <img class="swiper-item__img" :src="img" />
          </nut-swiper-item>
          <template #page>
            <view class="page">{{ current }}/4</view>
          </template>
        </nut-swiper>
      </view>
      <view class="section section__wrap">
        <view class="goods-pane-header">
          <view class="goods-pane-top">
            <nut-row type="flex" align="flex-end" justify="space-between">
              <nut-col :span="18">
                <nut-price :price="299.0" />
                <nut-price
                  class="price-original"
                  :price="259.0"
                  size="normal"
                />
              </nut-col>
              <nut-col :span="6"> 转发、收藏 </nut-col>
            </nut-row>
            <nut-row type="flex" justify="space-between">
              <nut-col :span="12">
                <coupon-tag :price="5" />
                <coupon-tag :price="8" />
              </nut-col>
              <nut-col :span="2">
                <nut-icon name="arrow-right" />
              </nut-col>
            </nut-row>
            <view class="goods-title">柏溪赋活水精华三代</view>
            <view class="goods-desc">
              <view>①清爽控油 轻盈蓬松</view>
              <view>②平衡水油 抗菌消炎</view>
              <view>③补水保湿 细腻肤质</view>
            </view>
            <view class="goods-pane-spec"> </view>
          </view>
        </view>
      </view>
    </nut-tabpane>
    <nut-tabpane pane-key="evaluate" title="评价"> Tab 2 </nut-tabpane>
    <nut-tabpane pane-key="detail" title="详情"> Tab 3 </nut-tabpane>
  </nut-tabs>
</template>

<script setup lang="ts">
import { CouponTag } from '@components/index';
import { ref } from 'vue';

type TabActive = 'goods' | 'evaluate' | 'detail';

const tabActive = ref<TabActive>('goods');

const imgs = ref([
  'https://img10.360buyimg.com/n1/s450x450_jfs/t1/134775/28/12249/93720/5f87a148E35c75ad9/225201a2ef4566ea.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]);

const page = ref(0);
const current = ref(0);
</script>

<style lang="scss">
@import './index.scss';
</style>

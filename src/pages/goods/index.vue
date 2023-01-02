<template>
  <nut-tabs v-model="tabActive">
    <nut-tabpane :class="className('__tab-pane')" pane-key="goods" title="商品">
      <Container>
        <GoodsCarousel :active="carouselActive" :items="carousels" />
      </Container>
      <Container :gutter="[10, 10]">
        <GoodsInfoCard />
      </Container>
      <Container :gutter="10">
        <GoodsInfoGrid />
      </Container>
    </nut-tabpane>
    <nut-tabpane pane-key="evaluate" title="评价"> Tab 2 </nut-tabpane>
    <nut-tabpane pane-key="detail" title="详情"> Tab 3 </nut-tabpane>
  </nut-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useClassName } from '@hooks/index';
import { Container } from '@components/index';
import GoodsCarousel from './components/GoodsCarousel.vue';
import GoodsInfoCard from './components/GoodsInfoCard.vue';
import GoodsInfoGrid from './components/GoodsInfoGrid.vue';
import useGoodsCarousel from './hooks/useGoodsCarousel';

const { className } = useClassName('_goods');

const { carouselActive, carousels } = useGoodsCarousel();

type TabActive = 'goods' | 'evaluate' | 'detail';

const tabActive = ref<TabActive>('goods');
</script>

<style lang="scss">
@import './index.scss';
</style>

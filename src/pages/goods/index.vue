<template>
  <SafeArea position="both">
    <nut-tabs v-model="tabActive">
      <nut-tabpane
        :class="className('__tab-pane')"
        pane-key="goods"
        title="商品"
      >
        <Section :padding="[0, 0, 10, 0]">
          <GoodsCarousel :active="carouselActive" :items="carousels" />
        </Section>
        <Section :padding="[0, 10, 10, 10]">
          <GoodsInfoCard />
        </Section>
        <Section :padding="[0, 10, 10, 10]">
          <GoodsInfoGrid :items="data.cells" />
        </Section>
        <Section :padding="[0, 10, 10, 10]">
          <GoodsComment />
        </Section>
        <Section :padding="10">
          <GoodsAskFamily />
        </Section>
        <Section :padding="[0, 10]">
          <Divider title="商品详情" />
        </Section>
        <Section :padding="10">
          <GoodsPictures :items="data.pictures" />
        </Section>
      </nut-tabpane>
      <nut-tabpane pane-key="evaluate" title="评价"> Tab 2 </nut-tabpane>
      <nut-tabpane pane-key="detail" title="详情"> Tab 3 </nut-tabpane>
    </nut-tabs>
  </SafeArea>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useClassName } from '@hooks/index';
import { Section, SafeArea, Divider } from '@components/index';
import GoodsCarousel from './components/GoodsCarousel.vue';
import GoodsInfoCard from './components/GoodsInfoCard.vue';
import GoodsInfoGrid from './components/GoodsInfoGrid.vue';
import GoodsComment from './components/GoodsComment.vue';
import GoodsAskFamily from './components/GoodsAskFamily.vue';
import GoodsPictures from './components/GoodsPictures.vue';
import useGoodsCarousel from './hooks/useGoodsCarousel';
import useGoodsInfo from './hooks/useGoodsInfo';

const { className } = useClassName('_goods');

const { carouselActive, carousels } = useGoodsCarousel();

const { data } = useGoodsInfo();

type TabActive = 'goods' | 'evaluate' | 'detail';

const tabActive = ref<TabActive>('goods');
</script>

<style lang="scss">
@import './index.scss';
</style>

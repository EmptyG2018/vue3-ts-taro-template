<template>
  <div class="myComments">
    <!-- navbar -->
    <div class="comments__bar">
      <div
        class="comments__item"
        :class="{
          'comments__bar--active': activeIdx === 0,
        }"
        @click="switchBar(0)"
      >
        待评价（4353）
      </div>
      <div
        class="comments__item"
        :class="{
          'comments__bar--active': activeIdx === 1,
        }"
        @click="switchBar(1)"
      >
        已评价（67）
      </div>
    </div>
    <EvaluateCard />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import EvaluateCard from '../components/EvaluationCard/index.vue';
const activeIdx = ref<number>(0);

const switchBar = (idx: number) => {
  activeIdx.value = idx;
};
</script>

<style lang="scss">
@import './index.scss';
</style>

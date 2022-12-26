<template>
  <div class="evaluate">
    <div v-if="type === 'single'" class="evaluate__single">
      <div class="spu__info">
        <div class="spu__info--img">
          <img :src="demoImg" alt="网络错误 " />
        </div>
        <div class="spu__info--detail">
          <div class="info__box">
            <div class="info__name ellipsis">《麦田与柏树》</div>
            <div class="gray">￥1924</div>
          </div>
          <div class="info__box">
            <div class="info__depict ellipsis">
              《麦田与柏树》是荷兰画家梵高1889年创作的一幅油画。
            </div>
            <div class="gray">x19</div>
          </div>
        </div>
      </div>
      <div class="order__info">
        <div class="order__info--detail">
          <div class="info__detail--time">2022-10-10 10:90</div>
          <div class="info__detail--num">
            <span>共13件商品</span>
            <span class="detail__price"
              >实付金额：￥<span class="jornum">99</span>.99</span
            >
          </div>
        </div>
        <div class="to__evaluate--btn">评价</div>
      </div>
    </div>
    <div v-else class="evaluate__multiple"></div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    type: 'single' | 'multiple';
  }>(),
  {
    type: 'single',
  }
);
const demoImg =
  'https://bercy.oss-cn-hangzhou.aliyuncs.com/Web/OA/20221226/image/07ac224367a785933b5b5ccf5886d513.jpg';
</script>

<style lang="scss">
@import './index.scss';
</style>

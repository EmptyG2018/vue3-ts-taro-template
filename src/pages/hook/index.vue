<template>
  <view class="main">
    <nut-collapse v-model:active="activeName" icon="down-arrow">
      <nut-collapse-item
        v-for="nav in navs"
        :title="nav.title"
        :sub-title="nav.desc"
        :name="nav.title"
      >
        <nut-cell
          v-for="item in nav.list"
          size="small"
          :title="item.title"
          :to="item.to"
        ></nut-cell>
      </nut-collapse-item>
    </nut-collapse>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeName = ref([]);

const navs = ref([
  {
    title: 'useToggle',
    desc: '开关',
    list: [
      {
        title: '简单案例',
        to: '/pages/hookusetoggle1/index',
      },
      {
        title: '监听触发',
        to: '/pages/hookusetoggle2/index',
      },
    ],
  },
  {
    title: 'useVisible',
    desc: '显隐',
    list: [
      {
        title: '简单案例',
        to: '/pages/hookusevisible1/index',
      },
      {
        title: '配合组件使用',
        to: '/pages/hookusevisible2/index',
      },
    ],
  },
  {
    title: 'useLoading',
    desc: '加载',
    list: [
      {
        title: '简单案例',
        to: '/pages/hookuseloading1/index',
      },
      {
        title: '配合请求使用',
        to: '/pages/hookuseloading2/index',
      },
    ],
  },
  {
    title: 'useAsync',
    desc: '处理异步',
    list: [
      {
        title: '简单案例',
        to: '/pages/hookuseasync1/index',
      },
      {
        title: '配合请求使用',
        to: '/pages/hookuseasync2/index',
      },
      {
        title: '配置useRequest使用',
        to: '/pages/hookuseasync3/index',
      },
    ],
  },
  {
    title: 'useRequest',
    desc: '接口请求',
    list: [
      {
        title: '简单案例',
        to: '/pages/hookuserequest1/index',
      },
      {
        title: '自定义请求',
        to: '/pages/hookuserequest2/index',
      },
    ],
  },
  {
    title: 'useLoadRefresh',
    desc: '初始化请求',
    list: [
      {
        title: '简单案例',
        to: '/pages/hookuserefresh1/index',
      },
    ],
  },
  {
    title: 'useLoadPage',
    desc: '分页请求',
    list: [
      {
        title: '简单案例',
        to: '/pages/hookuseloadpage1/index',
      },
    ],
  },
  {
    title: 'useLoadProp',
    desc: '滚动底部请求',
    list: [
      {
        title: '简单案例',
        to: '/pages/hookuseloadprop1/index',
      },
    ],
  },
]);
</script>

<style lang="scss">
@import './index.scss';
</style>

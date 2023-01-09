import { ref } from 'vue';

const useGoodsInfo = () => {
  const specActive = ref('');

  const data = ref({
    price: 299,
    price2: 259,
    coupons: [
      { couponId: 1, price: 5 },
      { couponId: 2, price: 8 },
    ],
    title: '柏溪赋活水精华三代',
    desc: ['①清爽控油 轻盈蓬松', '②平衡水油 抗菌消炎', '③补水保湿 细腻肤质'],
    specs: [
      {
        thumb: '...',
        label: '100ML',
        desc: '￥210',
        value: 1,
      },
      {
        thumb: '...',
        label: '200ML',
        desc: '￥990',
        value: 2,
      },
      {
        thumb: '...',
        label: '180ML',
        desc: '￥270',
        value: 3,
      },
    ],
    cells: [
      {
        label: '品牌',
        value: '波溪',
      },
      {
        label: '保质期',
        value: '24个月',
      },
      {
        label: '适用肤质',
        value: '任何肤质',
      },
      {
        label: '功效',
        value: '美白养颜',
      },
    ],

    pictures: [
      'https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/8o/wallhaven-8o2v82.jpg?w=2560&h=1440&fmt=jpg',
      'https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/j3/wallhaven-j3m8y5.png?w=2560&h=1440&fmt=jpg',
      'https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/y8/wallhaven-y8yykg.jpg?w=2560&h=1440&fmt=jpg',
      'https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/1p/wallhaven-1pj8jg.png?w=2560&h=1440&fmt=jpg',
      'https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/9m/wallhaven-9mjoy1.png?w=2560&h=1440&fmt=jpg',
    ],
  });

  return { specActive, data };
};

export default useGoodsInfo;

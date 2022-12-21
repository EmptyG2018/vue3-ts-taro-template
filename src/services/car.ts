import request from './request';
import { delay } from '@utils/index';

export const GetCarGoods = async (params: any) => {
  await delay(800);
  return {
    code: 0,
    data: [
      {
        goodsId: -1,
        goodsName: '麻阳冰糖橙3斤装',
        specifications: '3斤装',
        price: 9.9,
        amount: 1,
        thumb:
          'https://img11.360buyimg.com/seckillcms/s200x200_jfs/t1/120547/7/18725/100357/5fae2ff7Eadba0262/3a4e1ec60d002ce2.jpg!cc_200x200.webp',
        check: false,
      },
      {
        goodsId: -2,
        goodsName: '黄糯玉米2袋',
        specifications: '2袋装',
        price: 9.9,
        amount: 1,
        thumb:
          'https://img30.360buyimg.com/seckillcms/s200x200_jfs/t1/38441/9/21094/168939/638eee4dE865349c9/ea7e5a975ecf2a7c.jpg!cc_200x200.webp',
        check: true,
      },
      {
        goodsId: 1,
        goodsName: '百历坚罐装开心果500g原色大颗粒',
        specifications: '大盒装',
        price: 48.9,
        amount: 1,
        thumb:
          'https://img13.360buyimg.com/seckillcms/s250x250_jfs/t1/103018/40/28688/170735/6281f36aE44cdb747/1e08a82ea4af3c6b.jpg',
        check: false,
      },
      {
        goodsId: 2,
        goodsName:
          '哈曼卡顿 （Harman Kardon） Aura Studio3 音乐琉璃3代三代 360度立体声 桌面蓝牙音箱 电脑音响 黑金限量版',
        specifications: '三代套装+黑金限量版',
        price: 9.9,
        amount: 2,
        thumb:
          'https://img10.360buyimg.com/seckillcms/s250x250_jfs/t1/10323/12/18399/85391/62d4f447E1f29c478/b51c7acd74efa139.jpg',
        check: false,
      },
      {
        goodsId: 3,
        goodsName: '高洁丝放肆睡9包104片',
        specifications: '丑人套装',
        price: 30,
        amount: 4,
        thumb:
          'https://img11.360buyimg.com/seckillcms/s250x250_jfs/t1/179282/15/6472/102162/60b0dda4Ee6408e3e/a2b52c09b23f0316.jpg',
        check: false,
      },
      {
        goodsId: 4,
        goodsName: '高洁丝放肆睡9包104片',
        specifications: '519G+12G+玫瑰金',
        price: 6499,
        amount: 1,
        thumb:
          'https://img14.360buyimg.com/seckillcms/s250x250_jfs/t1/223031/8/9050/41450/61e0d477E117b1e24/116f910624596641.jpg',
        check: false,
      },
    ],
    msg: null,
  };
};

export const UpdateCarStatus = async (params: any) => {
  await delay(400);
  return {
    code: 0,
    msg: 'ok',
  };
};

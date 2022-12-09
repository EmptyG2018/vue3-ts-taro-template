import { ref } from 'vue';
import { useReachBottom } from '@tarojs/taro';
import useRequest from './useRequest';

const useLoadDrop = () => {
  const list = ref([]);
  const data = ref([]);

  useReachBottom(() => {
    console.log('reach bottom');
  });

  return {
    list,
    data,
  };
};

export default useLoadDrop;

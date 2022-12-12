import { ref } from 'vue';
import { useReachBottom } from '@tarojs/taro';
import type { AsyncService } from './useAsync';
import useLoadPage from './useLoadPage';
import { LoadPageOption } from './useLoadPage';

const useLoadDrop = <T = any>(
  service: AsyncService,
  options: LoadPageOption<T> = {}
) => {
  const { next, loading, ...rest } = useLoadPage<T>(service, options);

  const run = async () => {
    if (!loading) await next();
  };

  useReachBottom(() => run());

  return {
    ...rest,
    run,
    loading,
  };
};

export default useLoadDrop;

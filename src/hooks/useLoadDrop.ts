import { useReachBottom } from '@tarojs/taro';
import type { AsyncService } from './useAsync';
import useLoadPage from './useLoadPage';
import { LoadPageOption } from './useLoadPage';

const useLoadDrop = <T = any>(
  service: AsyncService,
  options: LoadPageOption<T> = {}
) => {
  const { immediate, ...option } = options;

  const {
    run: runAsync,
    next,
    loading,
    params,
    ...rest
  } = useLoadPage<T>(service, {
    immediate: false,
    ...option,
  });

  const run = async () => {
    if (!loading.value) {
      await next({ run: true });
    }
  };

  useReachBottom(() => run());

  immediate && runAsync(params.value);

  return {
    ...rest,
    run,
    loading,
  };
};

export default useLoadDrop;

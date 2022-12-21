import {
  startPullDownRefresh,
  stopPullDownRefresh,
  usePullDownRefresh,
} from '@tarojs/taro';
import useAsync from './useAsync';
import type { AsyncService, AsyncOption } from './useAsync';

const useLoadRefresh = <T = any>(
  service: AsyncService<T>,
  option: AsyncOption<T> = {}
) => {
  const { onFinally, ...rest } = option;

  const { run: runAsync, ...result } = useAsync<T>(service, {
    ...rest,
    cache: false,
    onFinally(params, result, err) {
      stopPullDownRefresh();
      onFinally && onFinally(params, result, err);
    },
  });

  usePullDownRefresh(() => runAsync());

  const run = (runOption: { pullDownRefresh?: boolean } = {}) => {
    const { pullDownRefresh } = runOption;

    pullDownRefresh ? startPullDownRefresh() : runAsync();
  };

  return {
    run,
    ...result,
  };
};

export default useLoadRefresh;

import {
  startPullDownRefresh,
  stopPullDownRefresh,
  usePullDownRefresh,
} from '@tarojs/taro';
import useLoading from './useLoading';
import { ref } from 'vue';

type Records = Record<string, any>;

export type LoadRefreshOption = {
  immediate?: boolean;
  defaultPullDownRefresh?: boolean;
  onBefore?: (params?: Records) => void;
  onSuccess?: () => void;
  onError?: (err: any) => void;
  onFinally?: (err: any) => void;
};

const useLoadRefresh = <T = any>(
  service: (params?: Records) => Promise<T>,
  option: LoadRefreshOption = {}
) => {
  const { loading, showLoading, hideLoading } = useLoading(false);

  usePullDownRefresh(() => {
    console.log('down refresh！');
  });

  const error = ref<any>();

  const {
    immediate,
    defaultPullDownRefresh,
    onBefore,
    onSuccess,
    onError,
    onFinally,
  } = option;

  const loadingRefresh = (
    refresh?: false | 'start' | 'stop',
    loading?: boolean
  ) => {
    refresh === 'start' && startPullDownRefresh();
    refresh === 'stop' && stopPullDownRefresh();
    loading ? showLoading() : hideLoading();
  };

  const run = async (runOption: { pullDownRefresh?: boolean } = {}) => {
    resetStateData();

    const { pullDownRefresh } = runOption;

    const refresh =
      pullDownRefresh !== undefined ? pullDownRefresh : defaultPullDownRefresh;

    typeof onBefore === 'function' && onBefore();

    loadingRefresh(refresh && 'start', true);

    try {
      await service();

      typeof onSuccess === 'function' && onSuccess();
    } catch (err: any) {
      error.value = err;

      if (typeof onError === 'function') {
        onError(err.value);
      }
    } finally {
      loadingRefresh(refresh && 'stop', false);

      typeof onFinally === 'function' && onFinally(error.value);
    }
  };

  const resetStateData = () => {
    error.value = undefined;
  };

  immediate && run();

  return {
    loading,
    run,
  };
};

export default useLoadRefresh;

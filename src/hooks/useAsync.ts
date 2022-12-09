import { ref } from 'vue';
import useLoading from './useLoading';

type Records = Record<string, any>;

export type AsyncService<T = any> = (params?: Records) => Promise<T>;

export type AsyncOption<T = any> = {
  immediate?: boolean;
  onBefore?: (params?: Records) => void;
  onSuccess?: (result: T, params?: Records) => void;
  onError?: (error: any) => void;
  onFinally?: (
    params: Records | undefined,
    result: T | undefined,
    error: any
  ) => void;
};

const useAsync = <T = any>(
  service: AsyncService<T>,
  option: AsyncOption<T> = {}
) => {
  const { loading, showLoading, hideLoading } = useLoading(false);

  const data = ref<T>();

  const error = ref<any>();

  const { immediate, onBefore, onSuccess, onError, onFinally } = option;

  const run = async (params?: Records): Promise<T> => {
    resetStateData();

    typeof onBefore === 'function' && onBefore();

    showLoading();

    try {
      const result = await service(params);
      data.value = result;

      typeof onSuccess === 'function' && onSuccess(data.value, params);

      return data.value;
    } catch (err: any) {
      error.value = err;

      typeof onError === 'function' && onError(err.value);

      return err;
    } finally {
      hideLoading();

      typeof onFinally === 'function' &&
        onFinally(params, data.value, error.value);
    }
  };

  const resetStateData = () => {
    data.value = undefined;
    error.value = undefined;
  };

  immediate && run();

  return {
    data,
    loading,
    error,
    run,
  };
};

export default useAsync;

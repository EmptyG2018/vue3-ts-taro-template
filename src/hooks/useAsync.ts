import { ref } from 'vue';
import useLoading from './useLoading';

export type Params = Record<string, any>;

export type AsyncService<T = any> = (params?: Params) => Promise<T>;

export type AsyncOption<T = any> = {
  immediate?: boolean;
  onBefore?: (params?: Params) => void;
  onSuccess?: (result: T, params?: Params) => void;
  onError?: (error: any) => void;
  onFinally?: (
    params: Params | undefined,
    result: T | undefined,
    error: any
  ) => void;
};

const useAsync = <T = any>(
  service: AsyncService<T>,
  options: AsyncOption<T> = {}
) => {
  const { loading, showLoading, hideLoading } = useLoading(false);

  const data = ref<T>();

  const error = ref<any>();

  const { immediate, onBefore, onSuccess, onError, onFinally } = options;

  const run = async (params?: Params): Promise<T> => {
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

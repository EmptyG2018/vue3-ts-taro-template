import { ref } from 'vue';
import useLoading from './useLoading';

type Records = Record<string, any>;

type RequestOption<T = any> = {
  immediate?: boolean;
  defaultParams?: Records;
  onBefore?: (params?: Records) => void;
  onSuccess?: (result: T, params?: Records) => void;
  onError?: (error: any) => void;
  onFinally?: (
    params: Records | undefined,
    result: T | undefined,
    err: any
  ) => void;
};

const useRequest = <T = any>(
  service: (params?: Records) => Promise<T>,
  option: RequestOption<T> = {}
) => {
  const { loading, showLoading, hideLoading } = useLoading(false);

  const data = ref<T>();

  const error = ref<any>();

  const { immediate, defaultParams, onBefore, onSuccess, onError, onFinally } =
    option;

  const run = async (syncParams?: Records) => {
    resetStateData();

    if (typeof service !== 'function') return false;

    const params = syncParams || defaultParams;

    typeof onBefore === 'function' && onBefore(params);

    showLoading();

    try {
      const result = await service(params);
      data.value = result;

      typeof onSuccess === 'function' && onSuccess(data.value, params);

      return data.value;
    } catch (err: any) {
      error.value = err;

      typeof onError === 'function' && onError(error.value);

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

export default useRequest;

import { ref } from 'vue';
import useAsync from './useAsync';
import type { Params, AsyncService, AsyncOption } from './useAsync';

export type RequestOption<T = any> = AsyncOption<T> & {
  defaultParams?: Params;
};

const useRequest = <T = any>(
  service: AsyncService<T>,
  options: RequestOption<T> = {}
) => {
  const { defaultParams, ...rest } = options;

  const params = ref<Params | undefined>(defaultParams);

  const {
    data,
    loading,
    error,
    run: runAsync,
  } = useAsync<T>(service, {
    immediate: false,
    ...rest,
  });

  const run = (syncParams?: Params) => {
    params.value = syncParams;

    return runAsync(syncParams);
  };

  const refresh = () => runAsync(params.value);

  return {
    data,
    params,
    loading,
    error,
    run,
    refresh,
  };
};

export default useRequest;

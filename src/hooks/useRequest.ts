import useAsync from './useAsync';
import type { AsyncService, AsyncOption } from './useAsync';

type Records = Record<string, any>;

type RequestOption<T = any> = AsyncOption<T> & {
  defaultParams?: Records;
};

const useRequest = <T = any>(
  service: AsyncService<T>,
  option: RequestOption<T> = {}
) => {
  const { defaultParams, ...rest } = option;

  const {
    data,
    loading,
    error,
    run: runAsync,
  } = useAsync(service, {
    immediate: false,
    ...rest,
  });

  const run = (syncParams?: Records) => {
    const params = syncParams || defaultParams;

    return runAsync(params);
  };

  return {
    data,
    loading,
    error,
    run,
  };
};

export default useRequest;

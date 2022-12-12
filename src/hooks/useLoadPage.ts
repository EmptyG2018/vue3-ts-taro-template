import { ref } from 'vue';
import useRequest from './useRequest';
import type { Params, AsyncService } from './useAsync';
import type { RequestOption } from './useRequest';

export type LoadPageOption<T = any> = RequestOption<T> & {
  defaultPaging?: Params;
  pagingOptions?: {
    currentField?: string;
    sizeField?: string;
  };
};

const useLoadPage = <T = any>(
  service: AsyncService<T>,
  options: LoadPageOption<T> = {}
) => {
  const {
    defaultPaging = {},
    pagingOptions = {},
    defaultParams,
    ...rest
  } = options;

  const { currentField = 'current', sizeField = 'size' } = pagingOptions;

  const paging = ref<Params | undefined>({
    [currentField]: defaultPaging[currentField] || 1,
    [sizeField]: defaultPaging[sizeField] || 16,
  });

  const { run, params, ...result } = useRequest<T>(service, {
    defaultParams: {
      ...defaultParams,
      ...paging.value,
    },
    ...rest,
  });

  const jumpPage = (step: number) => {
    return paging.value
      ? run({
          ...params.value,
          [currentField]: paging.value[currentField] + step,
        })
      : run(params.value);
  };

  return {
    run,
    next: () => jumpPage(1),
    prev: () => jumpPage(-1),
    params,
    ...result,
  };
};

export default useLoadPage;

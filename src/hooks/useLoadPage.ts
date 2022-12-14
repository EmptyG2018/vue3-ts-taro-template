import { ref } from 'vue';
import useRequest from './useRequest';
import type { Params, AsyncService } from './useAsync';
import type { RequestOption } from './useRequest';

export type LoadPageOption<T = any> = RequestOption<T> & {
  defaultPaging?: Params;
  pagingOptions?: PagingOptions;
};

export type PagingOptions = {
  currentField?: string;
  sizeField?: string;
};

export type PageOption = { run?: boolean };

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

  const syncPageStep = (step: number) => {
    if (paging.value) {
      paging.value[currentField] += step;
      params.value = {
        ...params.value,
        ...paging.value,
      };
    }
  };

  const jump = (step: number) => {
    if (paging.value) {
      paging.value = {
        ...paging.value,
        [currentField]: paging.value[currentField] + step,
      };
    }
    return paging.value
      ? run({
          ...params.value,
          ...paging.value,
        })
      : run(params.value);
  };

  const createJump = (step: number, pageOption: PageOption = {}) => {
    const { run } = pageOption;
    run ? jump(step) : syncPageStep(step);
  };

  return {
    run,
    next: (pageOption?: PageOption) => createJump(1, pageOption),
    prev: (pageOption?: PageOption) => createJump(-1, pageOption),
    params,
    paging,
    ...result,
  };
};

export default useLoadPage;

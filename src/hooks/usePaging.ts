import { reactive } from 'vue';

export type PagingOption = {
  current: number;
  size: number;
};

const usePaging = (options: PagingOption = { current: 1, size: 16 }) => {
  // 当前分页
  const paging: PagingOption = reactive(options);

  // 分页跳转
  const jumpPage = (
    current: number,
    fn?: (paging: PagingOption) => void
  ): void => {
    paging.current = current;

    if (typeof fn === 'function') fn(paging);
  };

  // 分页跳转
  const jumpSize = (
    size: number,
    fn?: (paging: PagingOption) => void
  ): void => {
    paging.size = size;

    if (typeof fn === 'function') fn(paging);
  };

  return { paging, jumpPage, jumpSize };
};

export default usePaging;

import { reactive } from 'vue';

export type PagingOption = {
  current?: number;
  size?: number;
  onPageChange?: () => void;
  onSizeChange?: () => void;
  onChange?: () => void;
};

const usePaging = (options: PagingOption = {}) => {
  const { current, size } = options;

  // 当前分页
  const paging: PagingOption = reactive({
    current: current || 1,
    size: size || 16,
  });

  // 分页跳转
  const jumpPage = (
    current: number,
    callback?: (paging: PagingOption) => void
  ): void => {
    paging.current = current;

    typeof callback === 'function' && callback(paging);
  };

  // 分页跳转
  const jumpSize = (
    size: number,
    callback?: (paging: PagingOption) => void
  ): void => {
    paging.size = size;

    typeof callback === 'function' && callback(paging);
  };

  return { paging, jumpPage, jumpSize };
};

export default usePaging;

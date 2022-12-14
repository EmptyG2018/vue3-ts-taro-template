import { ref } from 'vue';

const useToggle = (defaultValue = false) => {
  // 当前切换状态
  const state = ref<boolean>(defaultValue);

  // 切换：开
  const on = (): void => {
    state.value = true;
  };

  // 切换：关
  const off = (): void => {
    state.value = false;
  };

  // 相反切换
  const reverse = (): void => {
    state.value = !state.value;
  };

  return {
    state,
    on,
    off,
    reverse,
  };
};

export default useToggle;

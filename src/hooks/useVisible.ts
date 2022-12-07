import { ref } from 'vue';

const useVisible = (status = false) => {
  // 当前显示
  const visible = ref<boolean>(status);

  // 设置隐藏
  const showVisible = (): void => {
    visible.value = true;
  };

  // 设置显示
  const hideVisible = (): void => {
    visible.value = false;
  };

  return {
    visible,
    showVisible,
    hideVisible,
  };
};

export default useVisible;

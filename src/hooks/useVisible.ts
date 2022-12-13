import { ref } from 'vue';

const useVisible = (defaultValue = false) => {
  // 当前显示
  const visible = ref<boolean>(defaultValue);

  // 设置显示
  const show = (): void => {
    visible.value = true;
  };

  // 设置隐藏
  const hide = (): void => {
    visible.value = false;
  };

  // 相反设置
  const reverse = (): void => {
    visible.value = !visible.value;
  };

  return {
    visible,
    show,
    hide,
    reverse,
  };
};

export default useVisible;

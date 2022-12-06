import { ref } from 'vue';

const useShow = (initial = true) => {
  const state = ref(initial);

  const hide = () => {
    state.value = false;
  };

  const show = () => {
    state.value = true;
  };

  return { state, show, hide };
};

export default useShow;

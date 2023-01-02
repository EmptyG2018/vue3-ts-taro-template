import { ref } from 'vue';

const useGoodsCarousel = () => {
  const carouselActive = ref(0);

  const carousels = ref([
    'https://img10.360buyimg.com/n1/s450x450_jfs/t1/134775/28/12249/93720/5f87a148E35c75ad9/225201a2ef4566ea.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]);

  return { carouselActive, carousels };
};

export default useGoodsCarousel;

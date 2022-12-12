import Taro from '@tarojs/taro';
import wxConfig from '@/wx.config';

const { host, timeout } = wxConfig;

const request = async <T = any>(
  url: string,
  options: Omit<Taro.request.Option, 'url'>,
  isAuth = true
) => {
  Taro.showLoading({ title: '正在加载' });

  const requestOk = await Taro.request<ResponseData<T>>({
    url: host + url,
    timeout,
    header: {
      Authorization: isAuth
        ? `Bearer ${Taro.getStorageSync('token') || ''}`
        : undefined,
    },
    ...options,
  });

  Taro.hideLoading();

  const { statusCode, data } = requestOk;

  if (statusCode === 200) {
    return data.code === 0 ? data.data : data;
  } else {
    if (data.msg === 'token expire') {
      // 没有登录或登录过期
    } else {
      throw Error(data.msg || '服务异常！！！');
    }
  }
};

export default request;

import Taro from '@tarojs/taro';
import wxConfig from '@/wx.config';

const { host, timeout } = wxConfig;

const request = async <T = any>(url, options, isAuth = true) => {
  try {
    const requestOk = await Taro.request<T>({
      url: host + url,
      timeout,
      header: {
        Authorization: isAuth ? Taro.getStorageSync('token') : undefined,
      },
      ...options,
    });
    if (requestOk.statusCode === 200) {
      return requestOk.data;
    } else {
      throw Error(requestOk.msg);
    }
  } catch {
    throw Error('服务异常！！！');
  }
};

export default request;

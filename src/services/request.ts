import Taro from '@tarojs/taro';
import wxConfig from '@/wx.config';

const { host, timeout } = wxConfig;

const request = async (url, options, isAuth = true) => {
  try {
    const requestOk = Taro.request({
      url: host + url,
      timeout,
      ...options,
    });
    if (requestOk.code === 200) {
      return requestOk.data;
    } else {
      throw Error(requestOk.msg);
    }
  } catch {
    throw Error('服务异常！！！');
  }
};

export default request;

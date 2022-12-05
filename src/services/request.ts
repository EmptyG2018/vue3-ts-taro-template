import Taro from '@tarojs/taro';
import applicationConfig from '../../application.config';

const { host, timeout } = applicationConfig;

const request = async (url, options, isAuth = true) => {
  try {
    const requestOk = Taro.request({
      url: host + url,
      timeout: timeout,
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

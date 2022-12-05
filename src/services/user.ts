import request from './request';
import { delay } from '../utils';

export const GetToken = () => {
  return request('/user/getToken', {
    method: 'get',
  });
};

export const GetDemo = () => {
  return delay(Math.random() * 10000);
};

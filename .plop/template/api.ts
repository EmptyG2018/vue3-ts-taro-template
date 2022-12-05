import request from './request';

export const GetApis = () => {
  return request('/user/getToken', {
    method: 'get',
  });
};

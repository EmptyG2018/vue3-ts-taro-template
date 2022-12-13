import request from './request';
import { delay } from '@utils/index';

/**
 * @title API方法变量前缀命名说明
 * Get：查询
 * Add：新增
 * Update：修改
 * Del：删除
 * Export：导出
 * Download：下载
 */

export const GetToken = (params: Params.Login) =>
  request<API.GetDemo>('/user/getToken', {
    method: 'GET',
    data: params,
  });

export const GetProfile = () =>
  request('/admin/account/info', {
    method: 'GET',
  });

export const GetDemo = async () => {
  await delay(800);
  return {
    key1: 'key',
    key2: 2,
    key3: true,
  };
};

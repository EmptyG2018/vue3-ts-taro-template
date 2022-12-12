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

export const GetProfile = (params: Params.Login) =>
  request<API.GetDemo>('/user/getToken', {
    method: 'GET',
    data: params,
  });

export const GetDemo = async () =>
  request('/admin/account/info', {
    method: 'GET',
  });

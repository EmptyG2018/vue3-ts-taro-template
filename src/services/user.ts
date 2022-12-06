import request from './request';

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
    method: 'get',
    data: params,
  });

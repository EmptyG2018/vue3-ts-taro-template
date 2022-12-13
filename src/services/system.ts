import request from './request';

export const GetUploadFile = (params: any) =>
  request<API.GetUploadFile>('/files/files/meixidev/1/upload/', {
    method: 'POST',
    data: params,
    header: {
      'Content-Type': 'multipart/form-data',
    },
  });

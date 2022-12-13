declare type ResponseOk = {
  code: number;
  msg: string;
};

declare type PaginRequestFieldData = {
  pageNum: number;
  size: number;
};

type PaginResponseFieldData<T = any> = {
  current: number;
  rows: T;
  size: number;
  total: number;
};

type ResponseData<T = any> = ResponseOk & {
  data: T;
};

type PaginResponseData<T = any> = ResponseData<PaginResponseFieldData<T>>;

// Request 请求数据类型定义
declare namespace Params {
  // 包含分页 ts类型定义
  type QueryDemoList = PaginRequestFieldData & {
    keyword: string;
  };

  // 普通定义
  type Login = {
    username: string;
    password: string;
  };
}

// Response 响应数据类型定义
declare namespace API {
  type GetUploadFile = ResponseData<{
    createDeptId: string;
    createId: string;
    createBy: string;
    createTime: string;
    updateId: string;
    updateBy: string;
    updateTime: string;
    filesId: string;
    fileName: string;
    bucketName: string;
    area: string;
    filePath: string;
    original: string;
    type: string;
    sourceType: number;
    fileSize: string;
    delFlag: any;
  }>;

  // 成功且不做任何返回 ts类型定义
  type UpdateDemo = ResponseData<null>;

  // 定义普通定义
  type GetDemo = ResponseData<{
    key1: string;
    key2: number;
    key3: boolean;
  }>;

  type DemoItem = {
    key1: string;
    key2: number;
    key3: boolean;
  };

  // 包含分页 ts类型定义
  type GetDemoList = PaginResponseData<DemoItem[]>;

  // 不包含分页 ts类型定义
  type GetDemos = ResponseData<DemoItem[]>;
}

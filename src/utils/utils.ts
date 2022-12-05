/**
 * @title 暂停
 * @params {Number} timer 暂停时长（ms）
 * @returns {Promise.resolve} Promise 成功
 */
export const delay = (timer: number = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, timer);
  });
};

/**
 * @title 深度拷贝
 * @params {Object|Array|...} data 数据
 * @returns {Object|Array|...} 拷贝后的数据
 */
export const cloneDeep = <T = any>(data: T): T => {
  return JSON.parse(JSON.stringify(data));
};

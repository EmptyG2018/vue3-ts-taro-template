/**
 * @title 暂停
 * @param {Number} timer 暂停时长（ms）
 * @return {Promise.resolve} Promise 成功
 */
export const delay = (timer = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, timer);
  });
};

/**
 * @title 深度拷贝
 * @param {Object|Array|...} data 数据
 * @return {Object|Array|...} 拷贝后的数据
 */
export const cloneDeep = <T = any>(data: T): T => {
  return JSON.parse(JSON.stringify(data));
};

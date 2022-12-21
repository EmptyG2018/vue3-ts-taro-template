/**
 * @title 暂停
 * @params {Number} timer 暂停时长（ms）
 * @returns {Promise.resolve} Promise 成功
 */
export const delay = (timer = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, timer);
  });
};

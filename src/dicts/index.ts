export type Dict<T = string, S = number | string> = {
  label: T;
  value: S;
};

export const Locals: Dict[] = [
  {
    label: '英文',
    value: 'english',
  },
  {
    label: '中文',
    value: 'chinese',
  },
];

export const Sex: Dict[] = [
  {
    label: '男',
    value: 'man',
  },
  {
    label: '女',
    value: 'woman',
  },
];

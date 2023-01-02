const useClassName = (prefixCls: string) => {
  const prefix = prefixCls;
  const className = (className: string | string[] = '') =>
    Array.isArray(className)
      ? className.map((name) => prefix + name).join(' ')
      : prefix + className;
  return { className };
};

export default useClassName;

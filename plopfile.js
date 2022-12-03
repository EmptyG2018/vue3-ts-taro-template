module.exports = (plop) => {
  plop.setWelcomeMessage('请选择需要创建的模式：');
  plop.setGenerator('page', require('./.plop/generator/page'));
  plop.setGenerator('component', require('./.plop/generator/component'));
  plop.setGenerator('hook', require('./.plop/generator/hook'));
  plop.setGenerator('api', require('./.plop/generator/api'));
};

module.exports = {
  description: '创建api模块',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入API模块名称（无需填写后缀名）：',
      validate: (v) => {
        if (!v || v.trim === '') {
          return 'API模块名称不能为空';
        }
        return true;
      },
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/services/{{name}}.ts',
      templateFile: '.plop/template/api.ts',
    },
  ],
};

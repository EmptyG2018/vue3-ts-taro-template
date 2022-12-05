module.exports = {
  description: '创建hook',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入hook名称（无需填写后缀名）：',
      validate: (v) => {
        if (!v || v.trim === '') {
          return 'hook名称不能为空';
        }
        return true;
      },
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/hooks/use{{properCase name}}.ts',
      templateFile: '.plop/template/hook.ts',
    },
  ],
};

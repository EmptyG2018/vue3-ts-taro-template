module.exports = {
  description: '创建组件',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入文件名称（无需填写后缀名）：',
      validate: (v) => {
        if (!v || v.trim === '') {
          return '文件名称不能为空';
        }
        return true;
      },
    },
  ],
  actions: (data) => {
    return [
      {
        type: 'add',
        path: 'src/components/{{properCase name}}.vue',
        templateFile: '.plop/template/component.hbs',
      },
    ];
  },
};

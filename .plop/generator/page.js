module.exports = {
  description: '创建页面',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入页面名称（无需填写后缀名）：',
      validate: (v) => {
        if (!v || v.trim === '') {
          return '页面名称不能为空';
        }
        return true;
      },
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/pages/{{lowerCase name}}/index.vue',
      templateFile: '.plop/template/page.vue',
    },
    {
      type: 'add',
      path: 'src/pages/{{lowerCase name}}/index.scss',
      templateFile: '.plop/template/style.scss',
    },
  ],
};

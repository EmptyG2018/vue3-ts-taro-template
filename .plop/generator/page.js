const pageStyleMap = {
  默认样式: false,
  自定义导航栏: true,
};

const getPageStyle = () => {
  const pageStyle = [];
  for (const key in pageStyleMap) {
    pageStyle.push(key);
  }
  return pageStyle;
};

module.exports = {
  description: '创建页面',
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
    {
      type: 'input',
      name: 'title',
      message: '请输入标题名称：',
      validate: (v) => {
        if (!v || v.trim === '') {
          return '页面标题不能为空';
        }
        return true;
      },
    },
    {
      type: 'list',
      name: 'style',
      message: '请选择导航栏样式',
      choices: getPageStyle(),
    },
  ],

  actions: (data) => {
    return [
      {
        type: 'add',
        path: 'src/pages/{{lowerCase name}}/index.config.ts',
        templateFile: '.plop/template/page_config.hbs',
        data: {
          custom: pageStyleMap[data.style],
        },
      },
      {
        type: 'add',
        path: 'src/pages/{{lowerCase name}}/index.vue',
        templateFile: '.plop/template/page.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{lowerCase name}}/index.scss',
        templateFile: '.plop/template/style.hbs',
      },
    ];
  },
};

module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'fa-IR',
      title: 'راهنمای ریسلر هاب',
      description: 'به دنیای راهنما و پشتیبانی ریسلرهاب خوش‌آمدید.'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `https://www.resellerhub.ir/templates/resellerhub/template/img/icons/favicon.ico` }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', href: `https://www.zarinpal.com/templates/resellerhub/template/img/icons/apple-touch-icon.png` }],
    ['link', { rel: 'mask-icon', href: 'https://www.resellerhub.ir/templates/resellerhub/template/img/icons/icon_dark.svg', color: '#01204a' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'mizbanpaytakht/docs.resellerhub.ir',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'فارسی',
        selectText: 'زبان‌ها',
        editLinkText: 'ویرایش و اصلاح متن',
        nav: [
          {
            text: 'ریسلرهاب',
            link: 'https://www.resellerhub.ir/',
          },
          {
            text: 'شروع',
            link: 'https://www.resellerhub.ir/start.php'
          },
          {
            text: 'پرتال',
            link: 'https://www.resellerhub.ir/clientarea.php'
          },
        ],
        sidebar: {
          '/guide/': genSidebarConfig('راهنمایی')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-webservice',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}

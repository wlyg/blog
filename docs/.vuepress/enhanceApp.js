function integrateGitment(router) {
  const linkGitment = document.createElement('link')
  linkGitment.href = 'https://imsun.github.io/gitment/style/default.css'
  linkGitment.rel = 'stylesheet'
  const scriptGitment = document.createElement('script')
  document.body.appendChild(linkGitment)
  scriptGitment.src = 'https://imsun.github.io/gitment/dist/gitment.browser.js'
  document.body.appendChild(scriptGitment)

  router.afterEach((to) => {
    if (scriptGitment.onload) {
      renderGitment()
    } else {
      scriptGitment.onload = () => {
        const commentsContainer = document.createElement('div')
        commentsContainer.id = 'comments-container'
        commentsContainer.classList.add('content')
        const $page = document.querySelector('.page')
        if ($page) {
          $page.appendChild(commentsContainer)
          renderGitment()
        }
      }
    }
  })

  function renderGitment() {
    const gitment = new Gitment({
      // ！！！ID最好不要使用默认值（location.href），因为href会携带hash，可能导致一个页面对应像个评论issue！！！
      // https://github.com/imsun/gitment/issues/55
      id: location.pathname,
      owner: 'wlyg', // 必须是你自己的github账号
      repo: 'blog', // 上一个准备的github仓库
      link: location.origin + location.pathname,
      oauth: {
        client_id: 'e62dbe7763ccbf467cda', // 第一步注册 OAuth application 后获取到的 Client ID
        client_secret: '9b20eb399568a4a71e89224106c19725b2ef856c', // 第一步注册 OAuth application 后获取到的 Clien Secret
      },
    })
    gitment.render('comments-container')
  }
}

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  try {
    // 生成静态页时在node中执行，没有document对象
    document && integrateGitment(router)
  } catch (e) {
    console.error(e.message)
  }
}
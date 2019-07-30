module.exports = {
  title: 'Hello VuePress',
  description: 'Just test',
  themeConfig: {
    nav: [
      { text: '联系我', link: '/navigator/navigator' },
    ],
    sidebar: [
      {
        title: '数据库',
        children: [
          {
            title: 'mysql',
            children: [
              '/database/mysql/1',
              '/database/mysql/2'
            ]
          },
          {
            title: 'redis',
            children: [
              '/database/redis/1',
              '/database/redis/2'
            ]
          },
          {
            title: 'mongoDB',
            children: [
              '/database/mongoDB/1',
              '/database/mongoDB/2'
            ]
          }
        ]
      },
      {
        title: '数据结构与算法',
        children: [
          '/algorithms/graph',
          '/algorithms/skipList'
        ]
      },
      {
        title: '部署',
        children: [
          {
            title: 'docker',
            children: [
              '/deploy/docker/command',
              '/deploy/docker/dockerfile'
            ]
          },
          {
            title: 'nginx',
            children: [
              '/deploy/nginx/nginx'
            ]
          },
          {
            title: 'jenkins',
            children: [
              '/deploy/jenkins/install'
            ]
          }
        ]
      }
    ]
  },
}
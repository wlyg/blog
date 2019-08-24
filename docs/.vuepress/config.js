module.exports = {
  title: 'Welcome',
  description: 'Just test',
  themeConfig: {
    nav: [
      { text: '联系我', link: '/navigator/contact' },
    ],
    sidebar: [
      {
        title: '操作系统',
        children: [
          '/os/syscall',
          '/os/epoll'
        ]
      },
      {
        title: '数据库',
        children: [
          {
            title: '数据库基础',
            children: [
              '/database/base/base',
              '/database/base/transaction'
            ]
          },
          {
            title: 'mysql',
            children: [
              '/database/mysql/mvcc',
              '/database/mysql/log',
              '/database/mysql/myisam',
              '/database/mysql/innodb',
              '/database/mysql/lock'
            ]
          },
          {
            title: 'redis',
            children: [
              '/database/redis/introduction',
              '/database/redis/redission'
            ]
          },
          {
            title: 'mongoDB',
            children: [
              '/database/mongoDB/explain'
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
      },
      {
        title: 'Java',
        children: [
          '/java/jvmmodel',
          '/java/jmmmodel',
        ]
      },
      {
        title: 'Spring',
        children: [
          '/microservices/springcloud',
        ]
      },
    ]
  },
}
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
              '/database/base/base'
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
              '/database/redis/cache'
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
        title: '设计模式',
        children: [
          '/designpattern/introduction'
        ]
      },
      {
        title: 'Java',
        children: [
          '/java/jvmmodel',
          '/java/jmmmodel',
          '/java/nio',
        ]
      },
      {
        title: 'Spring',
        children: [
        ]
      },
      {
        title: '分布式',
        children: [
          {
            title: 'SpringCloud',
            children: [
              'distributed/springcloud/introduction'
            ]
          },
          {
            title: '分布式事务',
            children: [
              '/distributed/transaction/introduction'
            ]
          },
          {
            title: '分布式锁',
            children: [
              '/distributed/lock/redission'
            ]
          }
        ]
      },
      {
        title: '网络',
        children: [
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
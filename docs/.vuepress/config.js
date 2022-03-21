module.exports = {
    title: '我的技术站', // 设置网站标题
    description: '描述：我的技术站',
    base: '/', //默认路径
    themeConfig: {// 主题设置
        navbar: [
            {// 右上导航航条 docs/.vuepress/README.md
                text: '概述',
                link: '/'
            },
            {
                text: '计算机及网络基础',
                children: [
                    { text: '计算机基础', link: '/base/base.md'},
                    { text: 'io与网络', link: '/base/io.md' },
                    { text: '计算机网络', link: '/base/network.md' },
                    { text: 'linux', link: '/base/linux.md' },
                ]
            },
            {
                text: '并发编程',
                children: [
                    { text: '笔记', link: '/guide/ts/' },// 以 ‘/’结束，默认读取 README.md
                    { text: '其它链接', link: 'https://www.baidu.com/' } // 外部链接
                ]
            },
            {
                text: 'RPC通信框架',
                children: [
                    { text: '计算机基础', link: '/base/' }, // 可不写后缀 .md
                    { text: '其它链接', link: 'https://www.baidu.com/' }// 外部链接
                ]
            },
            {
                text: '消息中间件应用以及原理',
                children: [
                    { text: '笔记', link: '/redis/' },// 以 ‘/’结束，默认读取 README.md
                    { text: '其它链接', link: 'https://www.baidu.com/' } // 外部链接
                ]
            },
            {
                text: '缓存中间件应用与原理',
                children: [
                    { text: '计算机基础', link: '/redis/' }, // 可不写后缀 .md
                    { text: '其它链接', link: 'https://www.baidu.com/' }// 外部链接
                ]
            },
            {
                text: '分布式架构',
                children: [
                    { text: '笔记', link: '/guide/ts/' },// 以 ‘/’结束，默认读取 README.md
                    { text: '其它链接', link: 'https://www.baidu.com/' } // 外部链接
                ]
            },
            {
                text: '微服务架构',
                children: [
                    { text: '计算机基础', link: '/base/' }, // 可不写后缀 .md
                    { text: '其它链接', link: 'https://www.baidu.com/' }// 外部链接
                ]
            },
            {
                text: '系统系能优化',
                children: [
                    { text: '笔记', link: '/guide/ts/' },// 以 ‘/’结束，默认读取 README.md
                    { text: '其它链接', link: 'https://www.baidu.com/' } // 外部链接
                ]
            },
        ],
        sidebar: {//左侧列表
            '/base/': [
                { // 对应导航中的link文件夹路径，注意这里是 ‘/’结束
                    text: '计算机及网络基础',
                    children: [
                        // { text: '计算机基础', path: '/base/base.md'},
                        // { text: 'io与网络', path: '/base/io.md' },
                        { text: '计算机网络', link: '/base/network.md',children:['/base/base-son/cpu.md','/base/base-son/gpu.md'] },
                        { text: 'linux', link: '/base/linux.md' },
                        
                    ]
                }
            ],
            '/mysql/': [
                { // 对应导航中的link文件夹路径，注意这里是 ‘/’结束
                    text: 'Vue 学习',
                    children: [
                        '/mysql/1.md',
                        '/mysql/2.md'
                    ]
                }
            ],
            '/redis/': [
                {
                    text: 'Typescript 学习',
                    children: [
                        '/redis/1.md',
                        '/redis/2.md'
                    ]
                }
            ],

            // fallback 侧边栏被最后定义
            '/': [{
                text: 'Typescript 学习',
                children: [
                    {
                        text: '主页测试',
                        path: '/main/1.md'
                    }
                ]
            }], //不能放在数组第一个，否则会导致右侧栏无法使用 
        }
    }
}
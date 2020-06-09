module.exports = {
    '/views/': [
        '',
        {
            title: 'JavaScript学习笔记',
            collapsable: true,
            children: [
                'front-end/javascript/highOrder',
                'front-end/javascript/AOP',
                'front-end/javascript/events',
                'front-end/javascript/observer'
            ]
        },
        {
            title: 'Vue',
            collapsable: true,
            children: [
                'front-end/vue/vue2-simple-mvvm',
                'front-end/vue/vuex-origin-code',
            ]
        },
        {
            title: 'React',
            collapsable: true,
            children: []
        }
    ],
    '/guide/': [
        {
            title: '新手指南',
            collapsable: true,
            children: [
                '/guide/notes/one',
                '/guide/notes/two',
            ]
        },
        {
            title: '一级菜单2',
            collapsable: true,
            children: [
                '/guide/notes/three',
            ]
        }
    ],
    '/baodian/zero': [
        {
            title: '初级开发篇',
            collapsable: true,
            children: [
                '/baodian/zero/notes/css',
                '/baodian/zero/notes/stackMemory',
                '/baodian/zero/notes/closure',
                '/baodian/zero/notes/deeplyClone',
                '/baodian/zero/notes/oop',
                '/baodian/zero/notes/async&sync',
                '/baodian/zero/notes/debounce&throttle',
                '/baodian/zero/notes/crp',
                '/baodian/zero/notes/vue-question',
                '/baodian/zero/notes/array-unique',
                '/baodian/zero/notes/ten-algorithms',
                '/baodian/zero/notes/promise',
            ]
        }
    ],
    '/baodian/high': [
        {
            title: '中高进阶篇',
            collapsable: true,
            children: [
                '/baodian/high/notes/one',
            ]
        }
    ],
    '/projects/xm-shopping/':[
        {
            title: '仿小米商城',
            collapsable: true,
            children: [
                'init/initProject',
                'index/makePage',
                'index/realizeFunction'
            ]
        }
    ],
    '/upgradedVersion/':[
        {
            title: '高数',
            collapsable: true,
            children: [
                'highmath/infinity-limit', // 无穷小量，极限
                'highmath/multiple-function', // 多元函数
            ]
        },
        {
            title: 'c语言',
            collapsable: true,
            children: []
        },
        {
            title: '英语',
            collapsable: true,
            children: []
        }
    ]
}

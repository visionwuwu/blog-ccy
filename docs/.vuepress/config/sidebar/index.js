module.exports = {
    '/views/': [
        '',
        {
            title: 'JavaScript',
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
    '/other/baodian/': [
        '',
        {
            title: '前端面试题',
            collapsable: true,
            children: [
                'notes/css',
                'notes/stackMemory',
                'notes/closure',
                'notes/deeplyClone',
                'notes/oop',
                'notes/async&sync',
                'notes/debounce&throttle',
                'notes/crp',
                'notes/vue-question',
                'notes/array-unique',
                'notes/ten-algorithms',
                'notes/promise',
            ]
        }
    ],
    '/other/projects/xm-shopping/':[
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
    '/other/upgradedVersion/':[
        '',
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

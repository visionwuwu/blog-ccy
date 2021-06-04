module.exports = {
    "/front-end/": [
        "",
        {
            title: 'JavaScript',
            collapsable: true,
            children: [
                'javascript/highOrder',
                'javascript/AOP',
                'javascript/events',
                'javascript/observer'
            ]
        },
        {
            title: 'Vue',
            collapsable: true,
            children: [
                'vue/vue2-simple-mvvm',
                'vue/vuex-origin-code',
            ]
        },
        {
            title: 'React',
            collapsable: true,
            children: []
        },
    ],
    "/back-end/": [
        "",
    ],
    "/collegeCourses/": [
        "",
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
        },
    ],
    "/baodian/": [
        {
            title: "面试宝典",
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
    "/eassy/": [
        "",
        "article-beiying"
    ],
    "/CET-4/": [
        "",
        {
            title: "2021年4月",
            children: [
                "2021-04/0001",
            ]
        }
    ],
    "/day3+2/": [
        "",
        {
            title: "2021年1月",
            children: [
                "2021-01/0001",
                "2021-01/0002",
                "2021-01/0003",
                "2021-01/0004"
            ]
        }
    ],
    '/other/':[
        {
            title: '仿小米商城',
            collapsable: true,
            children: [
                'projects/xm-shopping/init/initProject',
                'projects/xm-shopping/index/makePage',
                'projects/xm-shopping/index/realizeFunction'
            ]
        }
    ]
}

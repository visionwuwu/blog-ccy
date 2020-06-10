module.exports = [
    { text: '主页', link: '/index.html', icon: 'reco-home' },
    { text: '时间线', link: '/timeline/', icon: 'reco-date' },
    { text: '关于我', link: '/about/', icon: 'reco-message' },
    {
        text: '其他',
        icon: 'reco-document',
        items: [
            {
                text: '面试宝典 📚',
                link: '/other/baodian/'
            },
            {
                text: '项目展示 🚀',
                link: '/other/projects/'
            },
            {
                text: '项目总结 📝',
                link: '/other/projects/xm-shopping/',
            },
            {
                text: '大学知识 📖',
                link: '/other/upgradedVersion/'
            },
            {
                text: 'TodoMVC 🌈',
                link: '/other/todoMVC/'
            },
            {
                text: '工具箱 📦',
                items: [
                    { text: '图片压缩', link: 'https://tinypng.com/' },
                    { text: '阿里云', link: 'https://www.aliyun.com/' },
                    { text: '腾讯云', link: 'https://cloud.tencent.com/' },
                    { text: '掘金', link: 'https://juejin.im/' },
                    { text: 'CSDN', link: 'https://blog.csdn.net/' }
                ]
            }
        ]
    },
    { 
        text: '收藏集', 
        icon: 'reco-date',
        items: [
            {
                text: "最爱看的书",
                link: '/collections/books'
            }
        ]
    }
]
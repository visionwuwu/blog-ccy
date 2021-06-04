module.exports = [
    { text: '主页', link: '/index.html', icon: 'reco-home' },
    { text: '时间线', link: '/timeline/', icon: 'reco-date' },
    { 
        text: '收藏集', 
        icon: 'reco-date',
        items: [
            {
                text: "爱看的书",
                link: '/collections/books'
            },
            {
                text: "爱追的剧",
                link: "/collections/tv"
            }
        ]
    },
    {
        text: '其他',
        icon: 'reco-document',
        items: [
            {
                text: "每日壹题 📚",
                link: "/day3+2/"
            },
            {
                text: "CET-4 🛰️",
                link: "/CET-4/"
            },
            {
                text: '技术文档 📖',
                link: '/other/documents'
            },
            {
                text: '收藏文章 📮',
                link: '/other/collectArticles'
            },
            {
                text: '项目展示 🚀',
                link: '/other/projectPreview/'
            },
            {
                text: '项目总结 📝',
                link: '/other/projects/xm-shopping/',
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
    { text: '关于我', link: '/about/', icon: 'reco-message' }
]
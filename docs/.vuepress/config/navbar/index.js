module.exports = [
    { text: '主页', link: '/index.html', icon: 'reco-home' },
    {
        text: '其他',
        icon: 'reco-document',
        items: [
            {
                text: '面试宝典 📚',
                items: [
                    { text: '初级开发篇 📘', link: '/baodian/zero/' },
                    { text: '中高进阶篇 📙', link: '/baodian/high/' },
                ]
            },
            {
                text: '项目展示 🚀',
                items: [
                    {
                        text: '仿小米商城 🛒',
                        link: '/projects/xm-shopping/'
                    }
                ]
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
    { text: '时间线', link: '/timeline/', icon: 'reco-date' },
    { text: '关于我', link: '/about/', icon: 'reco-message' },
]
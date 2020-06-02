module.exports = [
    ['meta', { name: 'author', content: 'Visionwuwu' }],
    ['meta', { name: 'keywords', content: 'vuepress博客 橙晨燕' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }], // 优化移动端搜索框
    ['link', { rel: "stylesheet", href: '/css/common.css' }], // 导入公共样式common.css
    [
        "script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
        }
    ],
    [
        "script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "/js/MouseClickEffect.js"
        }
    ]
]
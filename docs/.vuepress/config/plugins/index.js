const moment = require('moment');
const secret = require('../secret/index')
moment.locale('zh-CN')
module.exports = [
    ['container', {
        type: 'details',
        before: info => `<details class="custom-block details"><summary>${info}</summary>`,
        after: '</details>',
        defaultTitle: '详细信息'
    }],
    ['container', {
        type: 'right',
        defaultTitle: '',
    }],
    ['container', {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
    }],

    ['@vuepress/last-updated', {
        transformer: (timestamp) => {
            // 不要忘了安装 moment
            const moment = require('moment')
            return moment(timestamp).fromNow()
        }
    }],
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    }],
    ['@vssue/vuepress-plugin-vssue', {
        // 设置 `platform` 而不是 `api`
        platform: 'gitee',

        // 其他的 Vssue 配置
        owner: 'visionwuwu',
        repo: 'vuepress-blog',
        clientId: secret.clientId,
        clientSecret: secret.clientSecret
    }],
    ['@vuepress/medium-zoom', {
        selector: 'img.zoom-custom-imgs'
    }],
    'flowchart',
    // require('../../plugins/musicPlayer/index'),
    ['vuepress-plugin-smooth-scroll'],
    ["vuepress-plugin-boxx"],
    ["vuepress-plugin-nuggets-style-copy", {
        copyText: "复制代码",
        tip: {
            content: "复制成功!"
        }
    }]
]
const path = require("path");
const plugins = require("./config/plugins/index");
const head = require("./config/header/index");
const nav = require("./config/navbar/index");
const sidebar = require("./config/sidebar/index");
const secret = require("./config/secret");

module.exports = {
  // base: "/blog-ccy/", // 网站根目录，提供资源的路径
  title: "橙晨燕", // 网站的标题
  description: "鱼迷恋大海", // 网站描述SEO以meta标签渲染到网页上
  head, // 网站头部head标签里引用配置
  markdown: {
    lineNumbers: true,
    externalLinks: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./"),
        "data": path.resolve(__dirname, './data')
      },
    },
  },
  plugins,
  theme: "reco",
  themeConfig: {
    type: "blog",
    logo: "/logo.png", // 导航栏左侧图片配置
    authorAvatar: "/logo.png",
    smoothScroll: true,
    nav,
    sidebar,
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认文案 “标签”
      },
    },
    sidebarDepth: 3,
    // last updated
    lastUpdated: "最后一次更新",
    // 作者
    author: "Visionwuwu",
    // 备案号
    record: "赣ICP备19001999号-1",
    // 项目开始时间
    startYear: "2020",
    // git地址
    repo: "visionwuwu/blog-ccy",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    sidebarDepth: 2,
    // 浏览器独立线程缓存配置
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: "更新",
      },
    },
    // vssue评论组件配置
    valineConfig: {
      appId: "EyNNXyKCyLzreTkfL1ItwHgT-gzGzoHsz", // your appId
      appKey: "lCBSvTpLqh9znhnFF7x826x5", // your appKey
    },
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页 ！",
  },
};
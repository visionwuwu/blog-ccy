---
title: 仿小米商城项目初始化
date: 2020-05-06
---

<Boxx type='tip' title='论语十则' content='学而不思则罔，思而不学则殆。' />

[[toc]]

项目开发前的准备工作
---
- 1. **去Dcloud网下载HBuilderX编辑器 <Badge>HBuilderX</Badge>**
    - [附带HBuilderX下载地址](https://www.dcloud.io/hbuilderx.html)

<img :src="$withBase('/images/xiaomi-uniapp/init/download-HBuilderX.png')" class="zoom-custom-imgs d-block">

::: warning 注意
- 注意要下载 下载的是App版本
- 由于HBuilderX支持插件拓展功能。App开发版已集成相关插件、开箱即用。而标准版可以自定义安装插件。
:::

- 2. 在HBuilderX中导航栏=> 工具=> 插件安装 安装项目中要使用的插件 <Badge>Plugs</Badge>

<img :src="$withBase('/images/xiaomi-uniapp/init/plug.png')" class="zoom-custom-imgs d-block">
<br>
<img :src="$withBase('/images/xiaomi-uniapp/init/plug-panle.png')" class="zoom-custom-imgs d-block">

本项目需要安装的插件有: 
<p>
<Badge vertical="middle">App真机运行</Badge> 
<Badge vertical="middle" type="warning">uni-app编译</Badge> 
<Badge type="error" vertical="middle">js-beautify</Badge> 
<Badge vertical="middle">ellint-plugin-vue</Badge> 
<Badge type="warning" vertical="middle">scss/sass编译</Badge>
<Badge type="error" vertical="middle">stylelint</Badge>
<Badge  vertical="middle">es6编译</Badge>
</p>

创建uni-app项目
---

- 可以在uni-app官网文档查看快速上手创建一个项目 [快速上手](https://uniapp.dcloud.io/quickstart)
> 这里我来创建我自己的项目
1. **第一步**

<img :src="$withBase('/images/xiaomi-uniapp/init/create.png')" class="zoom-custom-imgs">

2. **第二步**

<img :src="$withBase('/images/xiaomi-uniapp/init/create-panle.png')" class="zoom-custom-imgs">

3. **创建完成**

<div class="d-flex">
    <img :src="$withBase('/images/xiaomi-uniapp/init/ok.png')" class="zoom-custom-imgs d-block">
</div>

项目目录结构
---
> 介绍下我的项目结构 👇👇👇

<img :src="$withBase('/images/xiaomi-uniapp/init/project-dir.png')" class="zoom-custom-imgs">

- **目录结构介绍表格:**

|   目录名称    |                             作用                             |
| :-----------: | :----------------------------------------------------------: |
|    common     |                      存放全局公共的文件                      |
|  components   |          存放项目中的封装的自定义组件，和第三方组件          |
|     pages     |                    存放项目中的所有的页面                    |
|    static     |                     存放所有静态资源文件                     |
|     store     |       采用vuex的模块化集中式来管理项目中多组件公共状态       |
|   unpackage   |              项目打包编译生成的各平台的输出代码              |
|    App.vue    | 应用配置，App应用的入口组件，可以在此引入一些全局的样式以及监听应用生命周期来做些初始化操作 |
|    main.js    |                        项目入口js文件                        |
| mainfest.json |           配置应用名称、appid、logo、版本信息等。            |
|  pages.json   |    项目页面路由配置，tabBar配置，globalStyle全局样式配置     |
|   uni.scss    | uni-app官方提供的全局scss文件，如果要使用官方提供的组件必须引入此文件 |


::: warning 提示
- 具体可以参考官方文档中的项目目录 :point_right: :point_right: :point_right: 提供官网链接[uni-app项目目录](https://uniapp.dcloud.io/frame?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84)
:::

如何启用安卓App真机调试？
---
1. **打开手机设置**
2. **更多设置**
3. **关于手机**
4. **疯狂点击手机型号 直到处于开发者模式**
5. **找到开发者模式，开启开发者模式**   
6. **勾选usb调试 usb安装 usb调试安全设置**
7. **usb连接你的手机和电脑**

<img :src="$withBase('/images/xiaomi-uniapp/init/run.png')" class="zoom-custom-imgs">

9. **首次运行会安装HBuilderx基座,点击确认安装即可**
::: tip 注意
- 如果不成功可以到查看[视频教程](hhttps://study.163.com/course/courseLearn.htm?courseId=1209401924#/learn/video?lessonId=1279344386&courseId=1209401924)
:::

如何启用苹果App真机调试？
---
1. **经过上面安卓App调试成功的配置**
2. **去iTunes官网下载 [iTunes官网](https://www.apple.com.cn/itunes/)**
<img :src="$withBase('/images/xiaomi-uniapp/init/itunes.png')" class="zoom-custom-imgs d-block">

3. **安装时下一步下一步即可,打开运行itunes即可,出现以下的效果就ok了**

<img :src="$withBase('/images/xiaomi-uniapp/init/itunes-success.png')" class="zoom-custom-imgs d-block">

------

<img :src="$withBase('/images/xiaomi-uniapp/init/iphone-run.png')" class="zoom-custom-imgs d-block">

4. **接下来会安装HBuilder调试基座，安装好了可能会有问题，点击HBuilder是会出现**

<div class="d-flex a-center j-center">
    <img :src="$withBase('/images/xiaomi-uniapp/init/debug-error.png')" class="zoom-custom-imgs">
</div>

5. **不用着急官方给出了解决方案**
6. **点击设置=> 通用=> 设备管理**

<div class="d-flex a-center j-center">
    <img :src="$withBase('/images/xiaomi-uniapp/init/book.png')" class="zoom-custom-imgs">
</div>

7. **手动打开HBulider或重新启动调试就行了**

::: tip 注意
> 如果不成功可以到查看[视频教程](https://study.163.com/course/courseLearn.htm?courseId=1209401924#/learn/video?lessonId=1279345376&courseId=1209401924)
:::

如何启用微信小程序调试？
---
- 打开HBuilder
- 点击运行=> 运行到小程序 => 运行设置
- 找到小程序运行配置下的微信开发者工具路径点击浏览（注意安装微信小程序开发者工具）
- 选择bin所在目录选中即可
- 在点击运行=> 运行到微信开发者工具

<div class="d-flex j-center a-center">
    <img :src="$withBase('/images/xiaomi-uniapp/init/weixin-miniprogram.png')" class="zoom-custom-imgs">
</div>

<div class="d-flex j-center a-center">
    <img :src="$withBase('/images/xiaomi-uniapp/init/weixin-miniprogram-set.png')" class="zoom-custom-imgs">
</div>

<div class="d-flex j-center a-center">
    <img :src="$withBase('/images/xiaomi-uniapp/init/weixin-miniprogram-set1.png')" class="zoom-custom-imgs">
</div>


如何启用支付宝小程序调试？
---

如何启用H5调试？
---
运行到H5端调试非常简单如下图：

**1.单击运行-->运行到浏览器-->选择一种浏览器运行(推荐使用谷歌浏览器)**

<div class="d-flex a-center j-center">
    <img :src="$withBase('/images/xiaomi-uniapp/init/h5.png')" class="zoom-custom-imgs">
</div>

**2.还可以选择运行到内置浏览器**

<div class="d-flex a-center j-center">
    <img :src="$withBase('/images/xiaomi-uniapp/init/h5-web.png')" class="zoom-custom-imgs">
</div>

::: warning 注意
- 运行到内置浏览器时HBuilder会启用一个本地服务在8083端口启动项目(不存在跨域问题)
- H5端启用时访问后端api接口时会出现跨域问题
    - 下面代码帮你解决跨域问题
    - 在当前项目的目录下点击 mainfest.json-->再点击源码视图-->添加以下代码
``` json
/* h5特有相关 */
"h5" : {
    "devServer" : {
        "port" : 8083, //端口号
        "disableHostCheck" : true,
        "proxy" : {
            "/api" : {
                "target" : "http://ceshi3.dishait.cn", //目标接口域名
                "changeOrigin" : true, //是否跨域
                "secure" : false, // 设置支持https协议的代理
                "pathRewrite" : {
                    "^/api" : "http://ceshi3.dishait.cn"
                }
            }
        }
    }
},
```
:::

下载官方提供的hello-uniapp
---
- 打开HBuilder
- 点击文件
- 选择新建项目，选择uni-app项目，选择下面提供的模板

<div class="d-flex a-center j-center">
    <img :src="$withBase('/images/xiaomi-uniapp/init/hello-uni-app.png')" class="zoom-custom-imgs">
</div>

在App.vue文件引用全局css文件 <Badge>css</Badge>
---
- 引用animate.css 
    - 一个css动画类库 [下载地址](https://cdn.bootcdn.net/ajax/libs/animate.css/3.7.2/animate.min.css)
- 引用项目所需要的icon.css 
    - 在阿里的iconfont网站选择的字体图标自己选择下载 [下载地址](https://www.iconfont.cn/)
- 引用封装的css工具类库zcm-main.css
- 引用封装的css工具类库zcm-main-nvue.css
- 引用全局公共的样式文件common.css
- 引用hello-uniapp提供的uni.css
    - 由于要使用hello-uniapp组件需要引用此样式文件

<div class="d-flex a-center j-center">
    <img :src="$withBase('/images/xiaomi-uniapp/init/app-css.png')" class="zoom-custom-imgs">
</div>

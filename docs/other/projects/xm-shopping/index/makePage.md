---
title: 首页页面制作
date: 2020-05-09
---

<Boxx />

[[toc]]

新建页面,配置page.json
---
- 点击文件=> 新建=> uni-app页面
- 配置globalStyle全局导航栏状态栏
``` json
"globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "仿小米商城",
    "navigationBarBackgroundColor": "#FFFFFF",
    "backgroundColor": "#FFFFFF",
    "backgroundTextStyle": "light"
},
```
- 底部tabbar选项卡配置
``` json
"tabBar": {
    "color": "#C0C0C0",
    "selectedColor": "#F46D01",
    "backgroundColor": "#FFFFFF",
    "borderStyle": "black",
    "position": "bottom",
    "list": [{
            "pagePath": "pages/index/index",
            "text": "首页",
            "iconPath": "static/tabbar/index.png",
            "selectedIconPath": "static/tabbar/indexSelected.png"
        },
        {
            "pagePath": "pages/calssify/calssify",
            "text": "分类",
            "iconPath": "./static/tabbar/class.png",
            "selectedIconPath": "static/tabbar/classSelected.png"
        },
        {
            "pagePath": "pages/cart/cart",
            "text": "购物车",
            "iconPath": "static/tabbar/cart.png",
            "selectedIconPath": "static/tabbar/cartSelected.png"
        },
        {
            "pagePath": "pages/about/about",
            "text": "我的",
            "iconPath": "static/tabbar/my.png",
            "selectedIconPath": "static/tabbar/mySelected.png"
        }
    ]
},
```
- 配置App首页自定义导航栏
``` json
{
    "path": "pages/index/index",
    "style": {
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTextStyle": "black",
        "navigationBarTitleText": "仿小米商城",
        "enablePullDownRefresh": true,
        "app-plus": {
            "bounce": "none",
            "titleNView": {
                "searchInput": {
                    "borderRadius": "4px",
                    "align": "left",
                    "disabled": "true",
                    "placeholder": "智能积木 越野四驱车",
                    "placeholderColor": "#CACACA",
                    "backgroundColor": "#F7F7F7"
                },
                "buttons": [{
                        "float": "left",
                        "text": "\ue67a",
                        "fontSrc": "/static/font/iconfont.ttf",
                        "fontSize": "22px",
                        "color": "#8E8E8E"
                    },
                    {
                        "float": "right",
                        "text": "\ue661",
                        "fontSrc": "/static/font/iconfont.ttf",
                        "fontSize": "22px",
                        "color": "#8E8E8E"
                    }
                ]
            }
        }
    }
}
```

自定义组件index-tabbar封装<Badge type="warning">index-tabbar</Badge>
---
- 1.在components下新建一个index目录,在新建一个index-tabbar.vue文件
- 2.用uniapp官方给出的scroll-view 快捷键是uScroll
- 3.scroll-view配置属性
    - scroll-x 滚动方向是x轴
    - scroll-with-animation 滚动时带有动画效果
    - scroll-into-view 滚动到某个子元素上
- 此组件需要的props
    - activeIndex 当前激活的tab索引
    - resdata 所需要的数据对象

``` html
<scroll-view class="flex-shrink" :scroll-into-view="`tab${activeIndex}`" scroll-x class="scroll-row border-bottom" scroll-with-animation>
    <view :id="`tab${index}`" :class="{'main-text-color': activeIndex === index}" :key="index" class="scroll-row-item px-3 font-md" v-for="(item, index) in resdata" 
    style="height: 80upx;line-height: 80upx;" @tap="$emit('changeTab', index)">{{item.name}}</view>
</scroll-view>
```
``` js
export default {
    props: {
        activeIndex: {
            type: Number,
            default: 0
        },
        resdata: {
            type: [Array, Object],
            requierd: true
        }
    }
}
```
::: tip 组件功能介绍
> 该组件首页的分类导航条通过点击某个分类查看分类对应的数据
:::


# guid下的one.md
[foo heading](#heading)
[two 页面](./two.md)
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
- :100:
- :1234:
-
-
-
-
-
-
-
### <span id="heading">锚点到头部</span>

---
title: Blogging Like a Hacker
lang: en-US
---
---
layout: post
title: Blogging Like a Hacker
---
1111
| id        | name    | age    | operation|
| --------- |:-------:|:------:|---------:|
| 哈哈       | 嘻嘻    | 哈哈    | AA       |

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

::: tip
这是一个提示的自定义容器
:::

::: warning
这是一个警告的自定义容器
:::

::: danger
这是一个危险的自定义容器
:::

::: details
这是一个详情的自定义容器
:::

::: tip 提示
哈哈哈
:::

::: details 打开我
```js
function fn(){
    console.log(1111)
}
```
:::

---
代码块高亮
---
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
---
html代码块
---
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
---
代码块中的行高亮
---
``` js{2}
var a = 1;
console.log("你高亮了")
var c = 2;
```
---
行号
---
你可以通过配置来为每个代码块显示行号：
``` js
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```
---
导入代码段
---
你可以通过下述的语法导入已经存在的文件中的代码段：
```
<<< @/./test.js{2}
```
<<< @/docs/.vuepress/test.js{2}

## 在Markdown中使用Vue
---
模板语法
---
**Input**
``` md
{{ 1 + 1 }}
```
**Output**
``` md
2
```
---
指令
---
同样地，也可以使用指令:
**Input**
``` md
<span v-for="i in 3">{{ i }}</span>
```
**Output**
``` md
1 2 3
```
---
访问网站以及页面的数据
---
编译后的组件没有私有数据，但可以访问 [网站的元数据](11)，举例来说：
**Input**
``` md
{{$page}}
```
**Output**
``` json
{
  "path": "/using-vue.html",
  "title": "Using Vue in Markdown",
  "frontmatter": {}
}
```
---
Escaping
---
默认情况下，块级 (block) 的代码块将会被自动包裹在 v-pre 中。如果你想要在内联 (inline) 的代码块或者普通文本中显示原始的大括号，或者一些 Vue 特定的语法，你需要使用自定义容器 v-pre 来包裹：
**Input**
``` md
::: v-pre
`{{ This will be displayed as-is }}`
:::
```
**Output**
::: v-pre
`{{ This will be displayed as-is }}`

:::
---
使用组件
---
所有在 .vuepress/components 中找到的 *.vue 文件将会自动地被注册为全局的异步组件，如：
```
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      ├─ OtherComponent.vue
      └─ Foo
         └─ Bar.vue
```
你可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）：
``` md
<demo-1/>
<OtherComponent/>
<Foo-Bar/>
```
<demo-1 />
### text <Foo-Bar/>
### text `<Foo-Bar/>`
<OtherComponent />
<a href="https://cn.vuejs.org">这是一个外部链接</a><OutboundLink  />

### Badge <Badge text="beta" type="warning"/> <Badge text="默认主题"/>
### YAML格式的front matter(前言)
``` md
---
title: Blogging Like a Hacker
lang: en-US
---
```
### JSON格式的front matter
``` md
---
{
  "title": "Blogging Like a Hacker",
  "lang": "en-US"
}
---
```
### TOML格式的front matter
``` md
--- toml
title = "Blogging Like a Hacker"
lang = "en-US"
---
```
## 预定义变量
#### meta
- 类型：`array`
- 默认值:  `undefined` 

指定额外的要注入的 meta 标签：

``` ymal
---
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---
```

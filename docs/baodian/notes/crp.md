---
title: 前端性能优化之CRP
date: 2020-05-31
tags: 
- http
categories:
- 前端
---

<Boxx />

[[toc]]

## 序言<Badge type="warning">1</Badge>
> 我们在做项目时，为了项目能运行更快，提高网站或项目的性能，和用户的体验，我们都会进行项目的优化操作。优化分为前端优化，后端优。前端需要优化那些点呢？这是我们必须要知道的，今天我写这篇文章主要是从CRP关键性节点优化。从每个点讲解前端优化的点，可能有的不全，或有错误欢迎提出指正。

## 浏览器输入url地址回车到响应所经历的过程
<img :src="$withBase('/images/ms-zero/httpRequest-process.png')" class="zoom-custom-imgs d-block">

## 浏览器渲染性能优化
> 当我们请求成功获得响应的内容时，浏览器下载到硬盘并进行解析响应体中的内容，首先会进行code编码转化，进二进制编码转化为字符集character,将字符集转化为一个个的含结束，开始标签的令牌token,将token令牌按照wc3标准进行词法解析，装化为一个个node节点，此时已经将这些节点的层级关系分析出来，最后将节点组装生成dom树。

<img :src="$withBase('/images/ms-zero/tree.png')" class="zoom-custom-imgs d-block">

## DNS域名解析过程及优化
- 本地缓存中查找(递归查找)
> dns域名解析首先从本地浏览器缓存中查找->在从host文件中查找->本地dns解析器缓存(路由器)->本地DNS域名服务器，采用递归查找，只要查找到了对应ip地址不会继续向后查找，逐级返回。

<img :src="$withBase('/images/ms-zero/dns-find-local.png')" class="zoom-custom-imgs d-block">

- 域名服务器查找(迭代查找)
>主机会先从本地域名服务器递归查找，本地缓存找不到在进行下一步，
发起dns调用本地域名服务器向根域名服务器查找，顶级域名服务器，权限服务器，最后告诉本地域名服务器要查询的域名ip。进行迭代查找。

<img :src="$withBase('/images/ms-zero/dns-find-host.png')" class="zoom-custom-imgs d-block">

## http请求优化
1. 压缩图片 
2. 使用iconfont字体图标
3. 减少http请求
4. 使用cnd加载
5. 减少首屏体积(单页面)
6. 使用loading动画，骨架屏(用户体验方面)
7. 开启gzip压缩至少减少60%~70%的文件传输体积
8. 使用缓存
9. 数据分批延迟加载

## 缓存优化(强缓存，协商缓存)
### 应用缓存
- Service Worker: 浏览器独立线程进行缓存
- Memory Cache: 内存缓存
- Disk Cache: 硬盘缓存
- Push Cache: 推送缓存(HTTP/2中的)
::: tip 查找缓存方式
1. 打开网页，输入网址，查找 disk cache中是否有该请求的资源匹配，有则使用，无则发送http请求获取
2. 普通刷新(F5),因为浏览器标签页没有关闭，所以会从memory cache中查找优先使用
3. 强制刷新(ctrl + F5),浏览器不使用缓存，因此发送的请求头中均带有，Cache Control: no-cache;服务器直接返回200和最新的资源。
:::

### 强缓存
> 浏览器对于强缓存的处理: 根据第一次请求资源返回的响应头来确定

<img :src="$withBase('/images/ms-zero/strong-cache.png')" class="zoom-custom-imgs d-block">

- `Expires`：缓存过期时间。用来指定资源到期的时间（HTTP/1.0）
在请求头中设置`Expries`字段并设置一个过期时间，当请求发送到服务端时，服务端拿到当前的请求头中的这个字段的值，与服务端的某个文件最后一次修改时间比较，如果比这个时间大说明从缓存中读取，返回304，和空的响应体。如果小的话，不走缓存，返回200，和修改的内容。

- `Cache-Control`：`cache-control: max-age: 25920000`第一次拿到资源后的25920000秒内 ，再次发送请求从缓存中读取信息（HTTP/1.1）

### 协商缓存
> 协商缓存就是强缓存失效后，浏览器携带缓存标识向服务端发起请求，由服务器根据缓存标识决定是否使用缓存的过程

<img :src="$withBase('/images/ms-zero/strong-cache.png')" class="zoom-custom-imgs d-block">

***`Last-Modified和If-Modified-Since`***

`Last-Modified`是服务端在响应头中设置资源最后一次修改时间返回给客户端浏览器的，浏览器将它存入缓存中，下一次在请求相同的资源时，浏览器会从缓存中取出`Last-Modified`的值赋给`If-Modified-Since`并添加到请求头中发送给服务器，当服务器接收到`If-Modified-Since`这个值与请求该资源的最后修改时间比较，发现不变时，返回304，和空的响应体，告诉浏览器从缓存中拿取资源，发现俩个值不一样，返回200状态码，和最新的资源文件。由于`Last-Modified`只能使用秒做单位，所以但时间小于一秒时。可能就发现不了。

---

***`ETag和If-None-Match`***


`ETag`是服务端标识该资源文件唯一的一个标记，服务器返回请求的资源文件时会把当前资源的ETag返回，浏览器收到响应的文件资源，和ETag存到缓存，下次再请求时在从缓存中取出，赋给`If-None-Match`并添加到请求头中，发送给后端服务器，服务端解析请求体时拿到`If-None-Match`与请求的资源的`ETag`比较如果当前请求的资源文件改变时`ETag`会发生改变，若相同，返回304,和空的响应体，告诉浏览器从缓存中读取，若不相同，返回200,和修改后的文件，和新的`ETag`，浏览器拿到新的文件和`ETag`存到缓存中。

---

> 协商缓存就是用个标识与服务端商量是否需要修改。
> 无论是强缓存还是协商缓存都需要服务端设置。强缓存优先于协商缓存。

## 项目打包时的优化(webpack)

## 总结
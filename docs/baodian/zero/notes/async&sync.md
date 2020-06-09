---
title: 异步和同步
date: 2020-05-31
tags:
- javascript
categories:
- 前端 
---

<Boxx />

[[toc]]

## 面试题
js是门单线程语言，先执行主栈任务，再执行异步任务。本题考查宏任务和微任务，事件队列，事件循环机制。
``` js
async function async1(){
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
function async2(){
    console.log('async2')
}
console.log('script start')
setTimeout(_=>{
    console.log('setTimeOut')
},0)
async1()
new Promise(resolve=>{
    console.log('Promise1')
    resolve()
}).then(res=>{
    console.log('Promise2')
})
console.log('script end')
```
::: details 解析
<img :src="$withBase('/images/ms-zero/async-sync.png')" class="zoom-custom-imgs d-block">
:::

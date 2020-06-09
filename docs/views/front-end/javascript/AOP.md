---
title: 面向切面编程
date: 2020-05-20 20:53:26
tags:
- javascript
categories:
- 前端
---

<Boxx />

[[toc]]

什么叫面向切面编程(AOP)? :ok_hand:
---

面向切面编程的好处?
---
- AOP将代码切成片 不改变原来的代码 在中间加上自己的代码
- 装饰器 扩展原来的方法重写原来的方法

面向切面编程列子
---
``` js
// 假设有这么一个需要，要在执行一段代码时添加一段代码执行，又不影响原有代码的执行?
function say(){
    console.log('我执行完了')
}

Function.prototype.before = (fn)=>{
    return ()=>{
        fn()
        say()
    }    
}

Function.prototype.after = (fn)=>{
    return ()=>{
        say()
        fn()
    }
}

let newFn = say.before(()=>{
    console.log('在你之前')
})


let newFn1 = say.after(()=>{
    console.log('在你之后')
})
newFn1()
```
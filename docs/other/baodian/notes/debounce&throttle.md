---
title: 防抖和节流
date: 2020-05-24
tags:
- javascript
categories: 
- 前端
---

<Boxx />

[[toc]]

## debounce防抖
原理：在一段时间内一直触发，最终只会执行一次。
- 利用定时器实现
``` js
function debounce(timer, doSome, immediate = false){
    let timeid;
    return function(...args){
        // 先清除定时器
        window.clearTimeout(timeid)
        // 是否立即执行
        if(immediate) {
            let callNow = !timeid;
            timeid = setTimeout(_=>{
                timeid = null;
            }, timer)
            if(callNow) doSome.apply(this, args)
        }else{
            // 开启定时器
            timeid = setTimeout(_=>{
                // 绑定当前上下文this,形参
                doSome.apply(this, args)
            }, timer)
        }
    }
}

function getPosition(args){
    console.log(args)
    console.log(this)
}

let res = debounce(1000, getPosition, true)
window.addEventListener('mousemove', res)
```
- 防抖函数完整版
``` js
function debounce(timer, doSome, immediate = false){
    let timeid, res;
    let debounced = function(...args){
        // 先清除定时器
        window.clearTimeout(timeid)
        // 是否立即执行
        if(immediate) {
            let callNow = !timeid;
            timeid = setTimeout(_=>{
                timeid = null;
            }, timer)
            if(callNow) res = doSome.apply(this, args)
        }else{
            // 开启定时器
            timeid = setTimeout(_=>{
                // 绑定当前上下文this,形参
                doSome.apply(this, args)
            }, timer)
        }
        return res
    }
    debounced.cancel = ()=>{
        window.clearTimeout(timeid)
        timeid = null
    }
    return debounced
}
function getPosition(args){
    console.log(args)
    console.log(this)
}
let res = debounce(1000, getPosition)
window.addEventListener('mousemove', res)
```
## throttle节流函数
- 利用时间戳实现节流
``` js
// 第一次会执行，而后延迟执行
function throttle(timer, doSome, immediate = true){
    // 当前时间
    let old = 0,now
    return function(...args){
        now = Date.now()
        if(now - old > timer){
            old = now
            doSome.apply(this, args)
        }
    }
}
function getPosition(args){
    console.log(args)
    console.log(this)
}
let res = throttle(1000, getPosition)
window.addEventListener('mousemove', res)
```
- 利用定时器完成节流函数
``` js
function throttle(timer, doSome, immediate){
    let timer;
    return function(...args){
        if(!timer){
            timer = setTimeout(_=>{
                timer = null
                doSome.apply(this, args)
            }, timer)
        }
    }
}
```
- 节流函数完整版实现
``` js
function throttle(timer, doSome, options){
    let timeid,old = 0,now
    return function(...args){
        now = Date.now()
        if(!options.leading){
            old = now;
        }
        if(now - old > timer){
            if(timeid){
                clearTimeout(timeid)
            }
            old = now
            doSome.apply(this, args)
        }else if(!timeid && options.trailing) {
            timeid = setTimeout(_=>{
                old = Date.now()
                doSome.apply(this, args)
                timeid = null;
            }, timer)
        }
    }
}
function getPosition(args){
    console.log(args)
    console.log(this)
}
let res = throttle(1000, getPosition, {
    leading: true, // 开始之前
    trailing: true // 结束之后
})
window.addEventListener('mousemove', res)
```
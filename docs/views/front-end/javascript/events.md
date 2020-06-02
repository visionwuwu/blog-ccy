---
title: 发布订阅者模式
date: 2020-05-20 20:55:30
tags: 
- javascript
categories: 
- 前端
---

<Boxx />

[[toc]]

发布任务 -> "中间代理" <- 订阅任务
---
``` js
function Events() {
    this.callbacks = []
    this.res = [];
    this.update = (res) => {
        this.callbacks.forEach(cb => {
            cb(res)
        })
    }
}

Events.prototype.on = function (fn) {
    this.callbacks.push(fn)
}

Events.prototype.emit = function (data) {
    this.res.push(data)
    this.update(this.res)
}

let event = new Events()


event.on((data) => {
    console.log(data)
})

const fs = require('fs')

fs.readFile('./name.txt', 'utf8', (err, data) => {
    event.emit(data)
})

fs.readFile('./age.txt', 'utf8', (err, data) => {
    event.emit(data)
})
```
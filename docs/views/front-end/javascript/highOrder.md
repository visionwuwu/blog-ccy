---
title: 高阶函数篇
date: 2020-05-20 20:58:30
tags:
- javascript
categories: 
- 前端
---

<Boxx />

[[toc]]

序言
---
> 本文是我学习时，写的笔记，主要讲解一些js高阶函数的基础知识，配了一些简单的列子。

高阶函数的定义 <Badge>Defined</Badge>
---
- 函数的参数是函数
- 函数的返回值是函数
- 函数的返回值和参数函数

> 函数的参数是函数

最典型的例子是回调函数
``` js
function fn(callback = null){
    callback && callback()
}
```
> 函数的返回值是一个函数

``` js
function fn(){
    return ()=> {
    }
}
```

> 函数返回值和参数都是函数

``` js
function fn(callback = null){
    return ()=>{
        callback && callback()
    }
}
```

高阶函数的作用 <Badge>Effect</Badge>
---
- 预置参数
- 解决异步问题

> 预置参数：将num变量预置到返回的函数中，并且保存一直不销毁
``` js {1}
function fn(num = 0){
    // ...args es6中的扩展运算符
    return (...args)=>{
        return args.reduce((mome, next)=>{
            return mome + next;
        }, num)
    }
}

// 调用fn函数将1预置到返回的匿名函数中再累加返回累加结果
let res1 = fn(1)(2,3)
console.log(res1) // 6
```
> 解决异步问题

``` js
// 导入nodejs fs核心模块
const fs = require('fs')
// 导入nodejs path核心模块
const path = require('path')

// 封装一个读取文件的函数
// 文件读取是一个异步任务
function readFile(filePath){
    return new Promise((resolve, reject)=>{
        fs.readFile(path.resolve(__dirname, './', filePath), 'utf8', (err, data)=>{
            if(err) return reject(err)
            // 读取成功
            resolve(data)
        })
    })
}

readFile('name.txt').then(data=>{
    console.log(data) // 输出读取文件
}, err=>{
    console.log(err)
})
```

高阶函数的应用例子 <Badge>Example</Badge>
---
- after函数 lodash中的after函数仿写 [lodash中文网](https://www.lodashjs.com/)
- 解决异步并发问题

> after函数

after函数是一个典型的高阶函数参数是函数，返回值也是函数。采用计数的方式，来触发回调。
``` js
function after(times, callback){
    return ()=>{
        if(--times === 0){
            callback && callback(argments)
        }
    }
}

let newFn = after(3, ()=>{
    console.log('当执行after函数执行3次是调用这个回调函数')
})

newFn()
newFn()
newFn()

```

> 解决异步并发问题

1)异步任务不能try catch

2)同步"异步的返回结果" 异步"并行" paralle 异步"串行" series
``` js
function after(times, callback = null){
    let res = [];
    return (err,data)=>{
        if(err){
            throw new Error(err)
        }
        res.push(data)
        if(--times === 0){
            callback && callback(res)
        }
    }
}

let newFn = after(2, (data)=>{
    console.log(data)
    console.log('after')
})


const fs = require('fs')

fs.readFile('./name1.txt', 'utf8', (err, data)=>{
    newFn(err, data)
})

fs.readFile('./age.txt', 'utf8', (err, data)=>{
    newFn(err, data)
})
```

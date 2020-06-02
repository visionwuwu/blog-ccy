---
title: 手写Promise
date: 2020-06-01
tags: 
- javascript
categories: 
- 前端
---

<Boxx />

[[toc]]

## Promise的特点
- 我承诺你,promise是一个类
    - Promise默认有三种状态，等待态(默认) 成功态 失败态 ,一旦成功就不能失败反过来也是一样
    - 每个promise实例都有一个then方法
    - 如果new Promise失败时报错 会变成失败态 (抛出错误也是)
``` js
let p = new Promise((resolve, reject)=> { // executor执行器
    // new Error('失败')
    resolve('success')
}).then(data=>{ // 成功
    console.log(data)
}, err=>{ // 失败
    console.log(err)
})
```

## 先实现一个Promise类
``` js
const PENDING = 'PENDING' // 等待
const RESOLVED = 'RESOLVED' // 成功
const REJECTED = 'REJECTED' // 失败
class Promise{
    // 1.看这个属性能否在原型上使用
    // 2.看属性是否公用
    // 3. 传入参数是一个函数 executor
    constructor(executor){
        this.status = 'PENDING' // 默认是pending
        this.value = undefined // 成功的值
        this.reason = undefined // 失败的原因

        this.onResolvedCallbacks = [] // 成功的回调数组
        this.onRejectedCallbacks = [] // 失败的回调数组

        // 成功函数
        // 保证this指向当前实例
        let resolve = (value)=>{ // 成功的值
            // 如果状态改变则不会执行
            if(this.status === PENDING){
                this.value = value
                this.status = RESOLVED
                this.onResolvedCallbacks(fn => fn()) // 成功发布
            }
        }

        // 失败函数
        let reject = (reason)=> { // 失败的原因
            if(this.status === PENDING){
                this.reason = reason
                this.status = REJECTED
                this.onRejectedCallbacks(fn => fn()) // 失败发布
            }
        }

        // 执行器内部执行可能会报错，等价于调用reject方法
        try{
            executor(resolve, reject) // 默认会立即执行
        } catch(err){
            reject(err)
        }
    }
    then = (onfulfilled, onrejected)=>{ // then目前有俩个参数
        if(this.status === RESOLVED){
            // todos ...
            onfulfilled(this.value)
        }
        if(this.status === REJECTED){
            onrejected(this.reason)
        }
        if(this.status === PENDING){
            // 如果是异步先订阅
            this.onResolvedCallbacks.push(()=>{ // 函数切面,重写push方法例子
                onfulfilled(this.value)
            })
            this.onRejectedCallbacks.push(()=>{
                onrejected(this.reason)
            })
        }
    }
}

let p = new Promise((resolve, reject)=>{
    resolve()
}).then(data=>{
    console.log(data)
}, err=>{
    console.log(err)
})
```

## then的用法
- 如果then中返回值是个promise实例，会将它执行，采用执行后的状态，作为下次then的成功，或失败的结果
- 如果返回的不是promise是一个普通类型，则用这个普通值作为下次then的成功结果
- 如果返回值是个错误，作为下次then的失败结果
- then返回每次执行完后或返回一个新的promise
- 链式操作
``` js
const PENDING = 'PENDING' // 等待
const RESOLVED = 'RESOLVED' // 成功
const REJECTED = 'REJECTED' // 失败
class Promise{
    // 1.看这个属性能否在原型上使用
    // 2.看属性是否公用
    // 3. 传入参数是一个函数 executor
    constructor(executor){
        this.status = 'PENDING' // 默认是pending
        this.value = undefined // 成功的值
        this.reason = undefined // 失败的原因

        this.onResolvedCallbacks = [] // 成功的回调数组
        this.onRejectedCallbacks = [] // 失败的回调数组

        // 成功函数
        // 保证this指向当前实例
        let resolve = (value)=>{ // 成功的值
            // 如果状态改变则不会执行
            if(this.status === PENDING){
                this.value = value
                this.status = RESOLVED
                this.onResolvedCallbacks(fn => fn()) // 成功发布
            }
        }

        // 失败函数
        let reject = (reason)=> { // 失败的原因
            if(this.status === PENDING){
                this.reason = reason
                this.status = REJECTED
                this.onRejectedCallbacks(fn => fn()) // 失败发布
            }
        }

        // 执行器内部执行可能会报错，等价于调用reject方法
        try{
            executor(resolve, reject) // 默认会立即执行
        } catch(err){
            reject(err)
        }
    }
    then = (onfulfilled, onrejected)=>{ // then目前有俩个参数
        if(this.status === RESOLVED){
            // todos ...
            onfulfilled(this.value)
        }
        if(this.status === REJECTED){
            onrejected(this.reason)
        }
        if(this.status === PENDING){
            // 如果是异步先订阅
            this.onResolvedCallbacks.push(()=>{ // 函数切面,重写push方法例子
                onfulfilled(this.value)
            })
            this.onRejectedCallbacks.push(()=>{
                onrejected(this.reason)
            })
        }
    }
}

let p = new Promise((resolve, reject)=>{
    resolve()
}).then(data=>{
    console.log(data)
}, err=>{
    console.log(err)
})
```
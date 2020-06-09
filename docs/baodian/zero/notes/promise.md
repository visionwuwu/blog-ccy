---
title: 手写Promise
date: 2020-06-01
tags: 
- javascript
categories: 
- 前端
pageClass: custom-page-class
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
- Promise是一个类
- promise有三种状态
- 并且会传入executor函数会立即执行
    - executor执行可能会抛出错误
    - Promise内可能会异步执行
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
- 链式操作
- 如果then中返回值是个promise实例，会将它执行，采用执行后的状态，作为下次then的成功，或失败的结果
- 如果返回的不是promise是一个普通类型，则用这个普通值作为下次then的成功结果
- 如果返回值是个错误，作为下次then的失败结果
``` js
const resolvePromise = (promise2, x, resolve, reject)=>{
    if(promise2 === x){
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>')) 
    }
    if(typeof x === 'object' && x !== null || typeof x === 'function'){
        try {
            let then = x.then // Object.defineProperty get set
            if(typeof then === 'function'){ // 有then方法，先认为他是一个promise
                then.call(x, y =>{
                    // 有可能返回的y是个promise
                    resolvePromise(promise2, y, resolve, reject)
                }, r =>{
                    throw r // 抛出错误
                })
            }else { // 普通对象
                resolve(x)
            }
        } catch (error) { // 取值报错
            reject(error)
        }
    }else {
        // 普通值
        resolve(x)
    }
}
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
            setTimeout(_=>{
                try {
                    // todos ...
                    // x 可能是普通值,错误,promise实例
                    let x = onfulfilled(this.value) // 接收返回值x
                    resolvePromise(promise2, x, resolve, reject)
                } catch (error) {
                    reject(error) // 抛出错误
                }
            }, 0) // >=4ms
        }
        if(this.status === REJECTED){
            setTimeout(_=>{
                try {
                    let x = onrejected(this.reason)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (error) {
                    reject(error) // 抛出错误
                }
            }, 0)
        }
        if(this.status === PENDING){
            this.onResolvedCallbacks.push(()=>{ // 函数切面,重写push方法例子
                setTimeout(_=>{
                    try {
                        let x = onfulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            })

            this.onRejectedCallbacks.push(()=>{
                setTimeout(_=>{
                    try {
                        let x = onrejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            })
        }
    }
}

const fs = require('fs')

// before
// 由于读取文件是异步的，会采取回调形式获取，但是这样是毫无意义，并且如果第二次读取结果依赖第一次，那么我们
// 可能会嵌套起来，造成回调地狱
const read = (path, cb)=>{
    // 可以进行错误处理，或者直接不处理
    if(typeof cb !== 'function'){
        throw new TypeError('cb must be a function')
    }
    fs.readFile(path, 'utf8',  cb)
}

// now
// 我们采用Promise可以很好解决这个问题
const read = (path)=>{
    return new Promise1((resolve, reject)=>{
        fs.readFile(path, 'utf8',  (err, data)=>{
            if(err) return reject(err)
            resolve(data)
        })
    })
}

read('./age.txt')
.then(data1=>{
    console.log(data1)
    return p
}, err1=>{
    console.log(err1)
}).then(data2=>{
    console.log(data2)
}, err2=>{
    console.log(err2)
})

let p = new Promise1((resolve, reject)=>{
    setTimeout(_=>{
        resolve('data')
    }, 0)
})

p.then(data1=>{
    console.log(data1)
    throw new Error('32323')
}, err1=>{
    console.log(err1)
}).then(data2=>{
    console.log(data2)
},err2=>{
    console.log(err2)
})
```
::: tip
- then返回每次执行完后或返回一个新的promise
- 1) promise链式操作
- 2) then方法是异步执行的
- 3) then方法执行返回值x可能有种
    - 1) 普通值: 直接作为下个then的成功值
    - 2) promise实例: 会执行promise，得到执行后的状态,传入到下个then方法的成功值或失败值
    - 3) 抛出错误: 传入到下个then的失败值
- 4) then方法会有俩个参数 onfulfilled onrejected
    - 1) 这俩方法是异步执行的
    - 2) 执行时可能会抛出错误(因为then方法可能会抛出错误)
- 5) then会返回一个新的promise实例，提供下次then使用
- 所有链式调用会返回新的promise实例会接受上次then方法返回的结果传入到onfulfilled和onrejected函数中
:::

## Promise.defer&Promise.deferred
基于Promise的延迟对象
``` js
Promise.defer = Promise.deferred = ()=>{
    let dfd = {}
    dfd.promise = new Promise((resolve, reject)=>{
        dfd.resolve = resolve
        dfd.reject = reject
    })
    return dfd
}
```

## Promise.all
解决异步并发 同步处理结果
- 静态方法
- 接收一个数组作为参数，可以实现异步并发，并且结果是按照顺序的
- 返回值还是一个promise对象
- 只要有一个失败就是失败
- 所有成功就是成功
``` js
Promise.all = function(values){
    let arr = [],
        index = 0
    return new Promise((resolve, reject)=>{
        for(let i = 0; i < values.length; i++){
            Promise.resolve(values[i]).then(data=>{
                arr[i] = data
                if(values.length === ++index){
                    resolve(arr)
                }
            }, err=>{
                reject(err)
            })
        }
    })
}

let p = new Promise((res, rej)=>{
    setTimeout(_=>{
        res(33)
    }, 10)
})

Promise.all([1, p ,2]).then((datas)=>{
    console.log(datas)
}, (errs)=>{
    console.log(errs)
})
```

## finally函数
- try catch finally es9 / node 11版本支持
- 原型上的方法
- 无论成功失败都会执行这个回调
- 返回值是一个promise
``` js
Promise.prototype.finally = function(cb){
    return this.then(
        data => Promise.resolve(cb()).then(_=> data), 
        err => Promise.resolve(cb()).then(_=> { throw err })
    )
}
```

## Promise.resolve
- 静态方法
- 接收一个参数会将传入的参数包装成promise执行
- 返回值是一个promise
``` js
const isPromise = (value)=>{
    if(typeof value === 'object' && value !== null || typeof value === 'function'){
        try {
            let then = value.then
            if(then === 'function'){
                return true
            }
        } catch (error) {
            return false
        }
    }
    return false
}

Promise.resolve = function(val){
    return new Promise((resolve, reject)=>{
        if(!isPromise(val)){
            resolve(val)
        }else{
            val.then(data=>{
                resolve(data)
            }, err=>{
                reject(err)
            })
        }
    })
}

let p = new Promise((res, rej)=>{
    setTimeout(_=>{
        rej(33)
    }, 0)
})

Promise.resolve(p).then(data=>{
    console.log(data)
},err=>{
    console.log(err)
})
```

## Promise.reject
- promise实列的方法
- 功能是能捕获promise执行抛出的错误和promise的失败态时的错误(能捕获promise的错误)
- 执行完返回一个新的promise实例，可以继续then
- catch传入的回调函数返回的值作为下次then的结果(成功或失败)
``` js
Promise.prototype.catch = function(cb){
    return this.then((data)=> data, 
    (err)=> cb(err))
}

let p = new Promise((resolve, reject)=>{
    setTimeout(_=>{
        reject(111)
    }, 1000)
})

let p1 = new Promise((res,rej)=>{
    res(222)
})

p.catch(err=>{
    console.log(err)
    return p1
}).then(data=>{
    console.log('data',data)
},err=>{
    console.log('error', err)
})
```

## Promise.reject
- Promise.reject静态方法
- 一上来创建一个失败的promise
- 将传入的值包装成一个promise对象
- 返回值为一个新的promise实例
``` js
Promise.reject = function (val){
    return new Promise((resolve, reject)=> {
        Promise.resolve(val).then((data)=>{
            reject(data)
        }, reject)
    })
}
let e = new Error('232')

Promise.reject(e).then(null, err=>{
    console.log(err)
})
```

## generator函数
- 产出迭代器 iterator
- yield 产出
- co
``` js
// 在函数名前面加上一个*
// 返回一个iterator迭代器对象
// it对象有next方法,每次调用都会返回yield产出的结果
// {done: false, value: ''}

// 具有iterator的方法才能for of循环

function* read(){ // 生成器
    let a = yield 'hello'
    console.log(a)
    let b = yield 'world'
    console.log(b)
    return 111;
}
let it = read() // 产出一个迭代器
console.log(it.next())
console.log(it.next(1)) // 传递的参数作为上一yield执行的结果
console.log(it.next(2))
```
``` js
let obj = {
    0: 'hello',
    1: 'world',
    *[Symbol.iterator](){ // 迭代器默认是一个对象，默认有next方法调用后返回done和value
        for(let i = 0; i < this.length; i++){
            yield this[i]
        }
    },
    length: 2
}

for (const iterator of obj) {
    console.log(iterator)
}
```
## generator + co 结合promise
``` js
const fs = require('fs').promises // node 10+将fs模块的所有方法直接转化为promise

const co = (it)=>{
    return new Promise((resolve, reject)=>{
        const next = (data)=>{
            let {
                value,
                done
            } = it.next(data)
            if(!done){
                // 移动指针继续执行
                Promise.resolve(value).then(res => {
                    next(res) // 递归
                }, err =>{
                    it.throw(err)
                    reject()
                    // throw new Error(err) 异步trycatch捕获不到异常
                })
            }else { // 迭代器执行完毕后返回执行结果
                resolve(data)
            }
        }
        next()
    })
}

function* read(){ // 生成器
    try{
        let content = yield fs.readFile('./age.txt', 'utf-8')
        let b = yield fs.readFile(content, 'utf-8')
    }catch(err){
        console.log(err)
    }
}
// 传入一个迭代器iterator通过then方法获取生成器最后的结果
// 将传入的迭代器依次执行，最后通过then获取值
co(read()).then(data=>{ 
    console.log(data)
}, err=>{
    console.log(err)
})
```

## async + await
原理基于generator + co 是个语法糖
``` js
// async + await 是异步解决的终极方案
// 有异步等待机制
async function read(){
    try {
        let res1 = await fs.readFile('./name.txt', 'utf-8')
        let res2 = await 2; // Promise.resolve()
        console.log('res1',res1)
        console.log('res2',res2)
    } catch (error) { // it.throw()
      console.log('err',error)
    }
}
read()
```

## nodejs中fs模块中promises方法实现
``` js
const fs = require('fs')

/**
 * 判断是否是函数
 * @param {*} fn 
 */
const isFunction = (fn)=>{
    return typeof fn === 'function'
}

/**
 * 将fs模块中的函数包装成promise类型的函数
 * @param {*} fn 
 */
const toPromise = (fn)=>{
    return (...args)=>{ // 面向切面编程
        return new Promise((resolve, reject)=>{
            fn(...args, (err, data)=>{
                if(err) return reject(err)
                resolve(data)
            })
        })
    }
}

function promises(){
    let obj = {}
    Object.keys(fs).map(key => {
        let val = fs[key]
        if(!isFunction(fs[key])) return;
        obj[key] = toPromise(val)
    })
    return obj
}

let obj = promises()

obj.readFile('./name.txt', 'utf-8')
.then(data=>{
    console.log(data)
}, err=>{
    console.log(err)
})

```
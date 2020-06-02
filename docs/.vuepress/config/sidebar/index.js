module.exports = {
    '/views/': [
        '',
        {
            title: 'JavaScript学习笔记',
            collapsable: true,
            children: [
                'front-end/javascript/highOrder',
                'front-end/javascript/AOP',
                'front-end/javascript/events',
                'front-end/javascript/observer'
            ]
        },
        {
            title: 'ES6',
            collapsable: true,
            children: [
            ]
        }
    ],
    '/guide/': [
        {
            title: '新手指南',
            collapsable: true,
            children: [
                '/guide/notes/one',
                '/guide/notes/two',
            ]
        },
        {
            title: '一级菜单2',
            collapsable: true,
            children: [
                '/guide/notes/three',
            ]
        }
    ],
    '/baodian/zero': [
        {
            title: '初级开发篇',
            collapsable: true,
            children: [
                '/baodian/zero/notes/css',
                '/baodian/zero/notes/stackMemory',
                '/baodian/zero/notes/closure',
                '/baodian/zero/notes/deeplyClone',
                '/baodian/zero/notes/oop',
                '/baodian/zero/notes/async&sync',
                '/baodian/zero/notes/debounce&throttle',
                '/baodian/zero/notes/crp',
                '/baodian/zero/notes/vue-question',
                '/baodian/zero/notes/array-unique',
                '/baodian/zero/notes/ten-algorithms',
                '/baodian/zero/notes/promise',
            ]
        }
    ],
    '/baodian/high': [
        {
            title: '中高进阶篇',
            collapsable: true,
            children: [
                '/baodian/high/notes/one',
            ]
        }
    ],
    '/projects/xm-shopping/':[
        {
            title: '仿小米商城',
            collapsable: true,
            children: [
                'init/initProject',
                'index/makePage',
                'index/realizeFunction'
            ]
        }
    ]
}


// 1)Promise是一个类
// 2)promise有三种状态
// 3)并且会传入executor函数会立即执行
    // 4) executor执行可能会抛出错误
    // 5) Promise内存可能会异步执行

const resolvePromise = (promise2, x, resolve, reject)=>{
    if(promise2 === x){
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>]')) 
    }
    if(typeof x === 'object' && x !== null && typeof x === 'function'){
        try {
            let then = x.then // Object.defineProperty
            if(typeof then === 'function'){ // 有then方法，先认为他是一个promise
                
            }else { // 普通对象
                reject(x)
            }
        } catch (error) {
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
class Promise1{
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
                this.onResolvedCallbacks.forEach(fn => fn()) // 成功发布
            }
        }

        // 失败函数
        let reject = (reason)=> { // 失败的原因
            if(this.status === PENDING){
                this.reason = reason
                this.status = REJECTED
                this.onRejectedCallbacks.forEach(fn => fn()) // 失败发布
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
        let promise2 = new Promise1((resolve, reject)=> {
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
                // 如果是异步先订阅
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
        })
        return promise2
    }
}

// 1) promise链式操作
// 2) then方法是异步执行的
// 3) then方法执行返回值x可能有种
    // 1) 普通值: 直接作为下个then的成功值
    // 2) promise实例: 会执行promise，得到执行后的状态,传入到下个then方法的成功值或失败值
    // 3) 抛出错误: 传入到下个then的失败值
// 4) then方法会有俩个参数 onfulfilled onrejected
    // 1) 这俩方法是异步执行的
    // 2) 执行时可能会抛出错误(因为then方法可能会抛出错误)
// 5) then会返回一个新的promise实例，提供下次then使用

// 所有链式调用会返回新的promise实例会接受上次then方法返回的结果传入到onfulfilled和onrejected函数中

let p = new Promise((resolve, reject)=>{
    setTimeout(_=>{
        resolve('data')
    }, 0)
})

let p2 = p.then(data=>{
    return p2
})

p2.then(data=>{
    console.log(data)
},err=>{
    console.log(err)
})

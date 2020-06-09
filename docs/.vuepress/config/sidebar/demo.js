/**
 * 定义一个遍历对象的方法
 * @param {*} obj 遍历的源对象
 * @param {*} cb 传入的回调取值
 */
const forEach = (obj, cb)=>{
    Object.keys(obj).map(key=>{
        cb && cb(key, obj[key])
    })
}

/**
 * 判断是否为对象
 * @param {*} obj 传入的值
 */
const isObject = (obj)=>{
    return typeof obj === 'object' && obj !== null
}

const oldArrayPrototype = Array.prototype

// 重写的数组方法
const reWriteArrayMethods = [
    'pop',
    'push',
    'unshift',
    'shift',
    'splice',
    'sort',
    'reverse'
]

// 创建对象并将原型指向oldArrayPrototype 相当于 _arrProrotype.__proto__ = oldArrayPrototype
const _arrPrototype = Object.create(oldArrayPrototype)

// 重写数组方法
function reWriteMethods(name){
    return function(...args){ // 面向切片编程
        // 会改变数组原来项
        // 如果调用的是push unshift splice这仨个方法会新增数组数据，新增的可能是对象
        // val.push(1,2,{},[])
        // val.splice(0,1,{}) 数组的删除 新增 修改,前俩个是固定的第三个是参数
        let inserted;
        switch(name){
            case 'push':
            case 'unshift':
                inserted = args
                break;
            case 'splice':
                inserted = args[2]
                break;
        }
        // 如果有插入继续接劫持
        if(inserted){
            observer(inserted)
        }
        // 调用数组原型方法，将this指向于当点调用者
        oldArrayPrototype[name].apply(this, args)
        // 可以刷新视图了
    }
}

reWriteArrayMethods.forEach(name=> {
    _arrPrototype[name] = reWriteMethods(name)
})

// 劫持数组
function observerArray(arr){
    arr.forEach(item=>{
        observer(item)
    })
    // 重写数组的7个原型方法
    arr.__proto__ = _arrPrototype
}

// 创建一个观察者observer
function observer(data){
    // 如果是数组,给每个成员进行劫持监听
    if(Array.isArray(data)){
        observerArray(data)
    }else if(data && isObject(data)){ // 存在且为对象
       Object.keys(data).map(key=>{
           // 定义响应式数据 只能劫持一层
           defineReactive(data, key, data[key])
            // 递归劫持
           observer(data[key])
       })
    }
    return data
}
// 定义响应式数据defineReactive
function defineReactive(data, key, val){
    let dep = new Dep()
    // 数据劫持
    Object.defineProperty(data, key, {
        get(){
            // 依赖收集,添加订阅数据变化，触发相应回调更新
            Dep.target && dep.addSub(Dep.target)
            // 取值
            return val
        },
        set(newVal){
            // 值发生改变
            if(newVal !== val){ // 新值不等于旧值
                // 如果赋值的是对象继续劫持
                observer(newVal)
                // 重新赋值
                val = newVal
                // 通知订阅者更新
                dep.notify()
            }
        }
    })
}

let data = observer({
    name: '张三',
    age: 10,
    obj: {
        a: 1,
        b: 2
    },
    arr: [1,2,{'xx':1,'bb': 2},[]]
})
console.log(data)


/********************---------------******************** */

// 创建一个依赖收集器Dep
Dep.prototype.addSub = function(target){
    this.subs.push(target) // 添加订阅器
}

Dep.prototype.notify = function(){
    this.subs.forEach(sub=> {
        sub.update()
    }) // 通知数据更新
}
function Dep(){
    this.subs = []
}

// 订阅数据变化，通知视图更新，订阅数据变化，触发更新回调
Watcher.prototype.getValue = function (){
    Dep.target = this
    Dep.target = null
}
Watcher.prototype.update = function (newValue){
    if(this.oldValue !== newValue){
        this.cb(newValue)
    }
}
function Watcher(vm, expr, cb){
    this.cb = cb
    this.oldValue = this.getValue()
}
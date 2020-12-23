---
title: vuex源码实现
date: 2020-05-28
tags:
- vuex
categories: 
- 前端
---

<Boxx />

[[toc]]

## vuex源码第一版
``` js
let Vue;
let forEach = (obj, cb = false)=>{
    if(!obj) return;
    Object.keys(obj).forEach(key =>{
        cb && cb(key, obj[key])
    })
}
class Store{
    constructor(options){
        this.vm = new Vue({ // 将state收集起来作为依赖
            data: {
                state: options.state
            }
        });
        let getters = {};
        let mutations = {};
        let actions = {};
        // 定义getters对象重新定义属性，进行劫持数据
        forEach(options.getters, (key, value)=>{
            Object.defineProperty(getters, key, {
                get:()=>{
                    return value(this.state, this.getters)
                }
            })
        })
        forEach(options.mutations, (mutationName, value)=>{
            mutations[mutationName] = value;
        })
        forEach(options.actions, (actionName, value)=>{
            actions[actionName] = value;
        })
        this.getters = getters;
        this.mutations = mutations;
        this.actions = actions;
    }
    get state(){ // 类的属性访问器,当类的实列访问该属性是时会调用该函数
        return this.vm.state;
    }
    // es7写法
    commit = (mutationName, payload)=>{ // 唯一用于并同步修改state中的数据
        this.mutations[mutationName](this.state, payload)
    }
    dispatch(actionName, payload){
        this.actions[actionName](this, payload)
    }
}

function install(_Vue){
    Vue = _Vue;

    Vue.mixin({
        beforeCreate(){
            // 根组件
            if(this.$options.store){
                this.$store = this.$options.store
            } else{ // 父组件先于子组件渲染
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}

export default {
    Store,
    install
}
```

## vuex模块化实现
store.js里面数据
``` js
const store = new Vuex.Store({
    modules:{
        a:{
            state: {
                age: 10
            },
            mutations: {
                syncUpdateAge(state, payload){
                    state.age += payload
                }
            }
        },
        b:{
            state:{
                age: 20
            },
            mutations:{
                syncUpdateAge(state){
                    console.log('b跟新年龄')
                }
            },
            modules:{
                c: {
                    state: {
                        age: 30
                    },
                    mutations:{
                        syncUpdateAge(state){
                            console.log('c更新年龄')
                        }
                    }
                }
            }
        }
    },
    state: {
        age: 1,
        name: '张三'
    },
    getters: {
        getName(state){
            if(state.age > 20){
                return state.name
            }else{
                return '111'
            }
        }
    },
    mutations: {
        syncUpdateAge(state, payload){
            state.age += payload
        }
    },
    actions: {
        asyncUpdateAge({commit}, payload){
            setTimeout(_=>{
                commit('syncUpdateAge', 3)
            }, 1000)
        }
    }
})
```
创建一个ModuleCollection进行模块化收集，格式化模块
``` js
class ModuleCollection{
    constructor(options){
        this.register([], options)
    }
    register(path, rootModule){
        let rawModule = {
            _rawModule: rootModule,
            _children: {},
            state: rootModule.state
        }
        // 添加根模块
        if(!this.root){
            this.root = rawModule
        }else {
            // 查找当前路径对应的父级模块
            let parentModule = path.slice(0, -1).reduce((root, currentPath)=>{
                return root._children[currentPath]
            }, this.root)
            parentModule._children[path[path.length - 1]] = rawModule;
        }

        if(rootModule.modules){
            // [a] 找到a模块,添加到对应父级模块下的_children下
            // [b] 找到b模块,添加到对应父级模块下的_children下
            // [b,c] 找到c模块,添加到对应父级模块下的_children下
            forEach(rootModule.modules, (moduleName, module)=>{
                this.register(path.concat(moduleName), module)
            })
        }
    }
}
```
将ModuleCollection格式好的模块化数据进行，安装到根模块中的state,和getters,mutations,actions中
``` js
// 模块安装
installModule(store, rootState, path, rootModule){
    // 遍历所有模块下的state安装到根模块下的state
    if(path.length > 0){
        // 遍历查找
        let parentModule = path.slice(0, -1).reduce((root, currentPath) => {
            return root[currentPath]
        }, rootState)
        // Vue.set(parentModule, path[path.length - 1], rootModule.state)
        parentModule[path[path.length - 1]] = rootModule.state
    }

    let getters = rootModule._rawModule.getters;
    if(getters){
        forEach(getters, (getterName, value)=>{
            Object.defineProperty(store.getters, getterName, {
                get(){
                    // 让getters使用自己的state
                    return value(rootModule.state) // 调用当前的函数
                }
            })
        })
    }

    let mutations = rootModule._rawModule.mutations
    if(mutations){
        forEach(mutations, (mutationName, value)=> {
            let mutations = store.mutations[mutationName] || []
            mutations.push((payload)=>{
                value(rootModule.state, payload)
                // 发布，通知所有订阅者
                this.subjects.forEach(fn=>{
                    fn({type: mutationName, payload}, store)
                })
            })
            store.mutations[mutationName] = mutations
        })
    }

    let actions = rootModule._rawModule.actions;
    if(actions) {
        forEach(actions, (actionName, value)=>{
            let actions = store.actions[actionName] || []
            actions.push((payload)=> {
                value(store, payload)
            })
            store.actions[actionName] = actions
        })
    }

    forEach(rootModule._children, (moduleName, module)=>{
        this.installModule(store, rootState, path.concat(moduleName), module)
    })
}
```
## 在Store类中添加一个registerModule方法，用于动态添加模块
``` js
// 注册模块
registerModule(path, module){
    if(!Array.isArray(path)){
        path = [path]
    }
    let rootModule = new ModuleCollection(module);
    this.installModule(this, this.state, path, rootModule.root)
}
```
## 我们还可以为vuex内部实现添加插件的功能
在创建Store类中options中添加插件配置项
``` js
// 设置用户信息到本地存储
const setUserInfoPlugin = (store)=>{
    store.subscribe((mutation, state)=>{
        const {type, payload} = mutation;
        console.log(type, payload)
    })
}
// 创建store实列
new Vuex.Store({
    plugins: [
       setUserInfoPlugin
    ]
})
```
主要代码实现
``` js
// 添加插件,订阅
options.plugins.forEach(fn=> fn(this))
// 添加订阅
subscribe(fn){
    this.subjects.push(fn)
}
// 发布，通知所有订阅者
this.subjects.forEach(fn=>{
    fn({type: mutationName, payload}, store)
})
```
---
title: 深克隆和浅克隆
date: 2020-05-25
tags: 
- js
categories:
- 前端
---

<Boxx />

[[toc]]

## 浅克隆
浅拷贝一般都是传地址，实现浅拷贝的方式
1. 直接赋值
``` js
let obj = {
    name: 'hero',
    age: 11
}
let obj1 = obj
```
- 小练习一
``` js
let a = 1
let b = a
b = 2
console.log(a)
console.log(b)
```
:::details 解析
1. 定义变量a赋值为1
2. 定义变量b将a赋给b
3. b重新赋值为2

**答案**
1. 输出 1
2. 输出 2
:::
- 小练习二
``` js
let arr = [1]
let arr1 = arr
arr1.push(2)
console.log(arr)
console.log(arr2)
```
::: details 解析
**答案**
1. [1,2]
2. [1,2]
:::

## 面试题手写一个深拷贝
``` js
let obj = {
    a: null,
    b: undefined,
    c: 1,
    d: /[^\d]+/,
    e: new Date(),
    f: {
        name: 'fa',
        age: 20,
        oo:{o1: 12},
        arr: []
    },
    g:[1,3,{g: 11},/\d+/, []]
}
// 对象才继续递归拷贝，其他数据类型直接返回
function deepClone(obj){
    // 如果是null
    if(obj === null) return obj
    // 如果是undefined
    if(obj === undefined) return obj
    // 如果是数字,字符串
    if(typeof obj === 'number' || typeof obj === 'string') return obj
    // 如果是正则
    if(obj instanceof RegExp) return new RegExp(obj)
    // 如果是日期对象
    if(obj instanceof Date) return new Date(obj)
    // 对象或者数组
    if(obj instanceof Object){
        // 创建一个当前对象的实列
        let newObj = new obj.constructor()
        // 遍历对象上的每个属性，进行递归拷贝
        Object.keys(obj).forEach(key=>{
            newObj[key] = deepClone(obj[key])
        })
        return newObj;
    }
}
let newObj = deepClone(obj)
```

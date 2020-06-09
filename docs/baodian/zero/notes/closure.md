---
title: 闭包
date: 2020-05-25
tags: 
- js
categories:
- 前端
---

<Boxx />

[[toc]]

## 闭包如何产生的
一个内部函数被外部变量引用了就形成闭包，闭包会导致原有的作用域链，不被销毁，造成内存泄露。
从原理上来讲就是作用域链得不到释放。可能你需要了解作用域，作用域链。

## 闭包的作用
1. 实现公有变量
2. 缓存变量
3. 可以实现封装，属性私有化
4. 模块化开发，防止污染全局变量

## 闭包的缺点
1. 造成内存泄露，也就是占用内存。

## 面试题目练习
- 小练习一
``` js
let a = 1;
function fn(){
    let a = 2;
    return ()=>{
        return a++;
    }
}
let c = fn()
let d = fn()
console.log(c())
console.log(d())
console.log(c())
```
::: details 解析
**答案**
- 输出2 
- 输出2
- 输出3
::: tip
``` js
GO = {
    ...window,
    a: 1,
    c: undefined,
    fn: function fn(){...} // 定义
    window: this
}
// VO指向GO
VO(G) = {
     ...window,
    a: 1,
    c: undefined,
    fn: function fn(){...} // 定义
    fn[[scope]]: this, // VO(G)
    window: this
}
// 创建执行环境栈
ECStack = []
// 创建全局执行环境，压缩到栈顶，获得优先执行权
ECStack = [
    EC(G) = {
        VO(G) = {
            ...window,
            a: 1,
            fn: function fn(){...} // 定义
            fn[[scope]]: this, // VO(G)
            window: this
        }
    }
]
// 函数fn执行创建EC(fn),创建作用域链，并初始化为当前执行函数的scope属性
//匿名函数定义初始化scope为当前环境
ECStack = [
    EC(fn) = {
        [scope]: VO(G), // 当前作用域指向全局变量对象VO(G)
        AO: {
            a: 2,
            arguments: [],
            name: 'fn',
            length: 0,
            "匿名函数": ()=>{return a++;} // 匿名函数定义
            "匿名函数[[scope]]": this, // 匿名函数scope属性初始化当前环境,VO(fn)
        },
        scopeChain: <AO(fn), AO(fn)[scope]>, // 初始化当前作用域为函数fn的scope属性,并将函数fn的AO对象指向链表最顶端
    },
    EC(G) = {
        VO(G) = {
            ...window,
            a: 1,
            fn: function fn(){...} // 定义
            fn[[scope]]: this, // VO(G)
            window: this
        }
    }
]
// 函数fn执行完毕后销毁了，所以fn的执行上下文EC(fn)没有用了从堆栈内存中删除->出栈，接着fn返回来的函数的引用被保存到c上c执行创建执行上下文EC(c),创建作用域链，并初始化为函数c(匿名函数)的scope所包含的对象，VO(fn)
ECStack = [
    EC(c) = {
        [scope]: VO(fn), // 当前作用域指向全局变量对象VO(G)
        AO: {
            arguments: [],
            name: 'fn',
            length: 0,
        },
        scopeChain: <AO(c), AO(c)[scope]>, // 初始化当前作用域为函数c的scope属性,并将函数c的AO对象指向链表最顶端
    },
    EC(fn) = {}, // 销毁了
    EC(G) = {
        VO(G) = {
            ...window,
            a: 1,
            fn: function fn(){...} // 定义
            fn[[scope]]: this, // VO(G)
            window: this
        }
    }
]
```
:::
- 小练习二
``` js
// 以下代码输出结果
let a = 1;
function A(a){
    A = (b)=>{
        console.log(a + b++)
    }
    alert(a)
}
A(2)
A(5)
```
::: details 解析
**答案**
- 先alert '2'
- 输出 7
::: tip
1. 
:::
## 总结
> 闭包随处可见，但是我们在平常的工作中我们尽量避免闭包的产生，但如果能合理利用闭包的特点还是非常有用的。


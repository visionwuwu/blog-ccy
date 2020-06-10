---
title: 堆栈内存
date: 2020-05-25
tags: 
- javascript
categories: 
- 前端
---

<Boxx title="《一次就好》--- 杨宗纬" content="世界还小，我陪你去看天涯海角，在没有烦恼的角落里，停止寻找，在无忧无虑的时光里，慢慢变老，你可知道我全部的心跳，随你跳。"  />   

[[toc]]

## 变量提升
js有变量提升这个说法，变量提升给我们编程带来了许多的不变，所有我们有必要了解变量提升的特点。
被var声明的变量会变量提升
- 变量声明提升
``` js {1}
console.log(a);
var a = 1;
console.log(a)

/*******华丽分割线*******/
/***
 * var a;
 * console.log(a)
 * a = 1;
 * /
```
::: details 解析
::: tip
1. 首先所有被var声明的变都会被提升到代码最顶部
2. var a;变量声明未赋值，默认为undefined;
3. js代码从上到下执行，也就是解释一行执行一行，所以console.log(a)为undefined
4. 当执行到var a = 1;时由于a已经被提升到最上面声明了所以这一步是a = 1;赋值操作
5. 再次输出a时变为1

**答案**
- 第一输出undefined
- 第二次输出1
:::

- 函数声明整体提升
``` js
fn() 
function fn(){
    console.log(111)
}

/*******华丽分割线*******/
/**
 * function fn() {console.log(111)}
 * fn()
 * /

```
::: details 解析
::: tip
1. 函数声明时整体提升所以 整个函数体被提升到最顶部
2. 在执行fn函数
3. 输出111

**答案**
- 输出111
:::

``` js
fn() 
var fn = ()=>{
    console.log(111)
}
```
::: details 解析
::: tip
是不是觉得很疑惑咋会报错了
1. 首先定义一个变量为fn然后赋值一个函数，此时这个函数我们叫它函数表达式
2. 由于var声明的变量会提升到最顶部当执行此时fn的值为undefined
3. fn()是函数执行的运算符，报了fn is not a function的TypeError

**答案**
- TypeError: fn is not a function
:::

题目一: 下面代码执行输出结果
``` js
var a = 0;
var b = 1;
function fn(c){
    console.log(a);
    console.log(b)
    var b = 1;
    console.log(b);
    var c;
    console.log(c)
}
fn(1)
```
::: details 解析
::: tip
1. 首先全局环境下声明变量a,b,还有函数fn声明。
2. 并赋值a = 0; b = 1。
3. 函数fn(1)执行
4. 函数内部执行在函数执行时创建环境，发现里面也有变量声明b, c并赋值为undefined。
5. 接下来执行console.log(a)函数fn中未定义沿着作用域往上找找到全局a输出0，console.log(b)输出undefined
b = 1;赋值为1再次console.log(b)为1;定义变量c已经被提升上去，输出c此时注意此时形参c已被变量声明，单需要实参与形参值相统一c = 1;最后c输出1

**答案**
- 0
- undefined
- 1
- 1
:::

## 编译器(将代码解析成浏览器能够看懂得结构)
1. 词法解析
2. 生成AST抽象语法树
3. 构建出浏览器能够识别的代码

## js引擎(v8/webkit)
作用是执行js代码的
1. js引擎要想执行代码它会创建执行环境执行栈
2. 栈内存，提供一个执行上下文的环境来执行代码。
- ECS(Execution Context Stack)环境执行栈
- EC(Execution Context)执行上下文
    - EC(G)全局执行上下文
    - EC(...)函数执行上下文
- 变量对象
    - GO(Global Object)全局对象，存储全局变量和方法。GO对象会赋给window。window = GO = {}
    - VO(Variable Object)变量对象，存储当前上下文中的变量
    - AO(Activation Object)活动对象,可以理解为函数执行时创建的变量对象
- 变量赋值有三步
    - 变量声明
    - 创建值，基本值类型的值放在栈内存中存储。
    - 变量和值关联起来。赋值，定义，defined。

- 引用值变量赋值
    - 由于引用值是复杂的结构，所以开辟一块内存空间存储对象的键值对(函数存储函数体中的代码)，这个空间叫堆内存。所有的堆内存，都有一个可供后续查找的16进制地址，后续查找和赋值的时候是吧堆内存地址给予变量操作的。

<img :src="$withBase('/images/ms-zero/stack-heap.png')" class="zoom-custom-imgs">

- 小练习-1
``` js
let a = {}
let b = {
    name: '1'
}
let c = {
    name: '2'
}
a[b] = 'bbbb'
a[c] = 'cccc'
console.log(a[b])
console.log(a[c])
// 上面代码输出结果
```
::: details 解析
:::tip 
1. a,b,c三个对象都是引用类型的值，给a对象添加b,c属性值会调用toString()方法。
2. a[b] => a["[object Object]"] = 'bbbb'; 
3. a[c] => b["[object Object]"] = 'cccc';
4. 对象的属性名不能重复所以a = {"[object Object]": 'cccc'}

**答案**

第一次输出：`'cccc'`

第二次输出：`'cccc'`
:::
- 小练习-2
``` js
let a = {}
let b = {
    id: 1
}
b.m = a = {
    num: 11
}
a.num++;
console.log(b.m.num)
console.log(a.num)
// 上面代码执行输出结果
```
::: details 解析
:::tip

**答案**
12
12
:::

- 堆栈内存案例题目
``` js
let a = 1;
let b = 2;
b = 13;
console.log(b)

/************************/

let a = {
    n: 12
}
let b = a;
b['n'] = 13;
console.log(a.n)
```
<img :src="$withBase('/images/ms-zero/stackMemory.png')" class="zoom-custom-imgs d-block">

- 下面用伪代码模拟js引擎运行机制
``` js
let y = 1;
function fn(x){
    let y = 1;
    function test(z){
        console.log(x + z + y)
    }
    return test;
}
let c = fn(2);
c(3)
```
- 变量声明，函数定义，
``` js
GO = {
    y: 1,
    fn: function fn(){...},
    fn[[scope]]: this, // VO
    ...window,
    window: this
}
```

- js引擎想要执行代码就会创建一个执行环境栈ESC，其实就是栈内存。用来执行代码的。
- EC 执行上下文
- 代码执行时都会在一个执行上下文中执行，全局环境下是EC(G)全局执行上下文，函数执行时会产生函数执行上下文EG(...);函数fn定义是会在它内部加入一个scope属性对象，总是指向当前所处的环境

- 创建全局执行环境EC(G),将VO指向GO,并将EGC压入栈底
``` js
let Ecstack = [];
Ecstack.push(EGC);
```

``` js
EC(G) = { // 全局执行环境
    VO: { // 全局变量对象
        y: 2,
        fn: function fn(){...},
        fn[[scope]]: this,
    }
}
```

- 执行函数fn时会先创建函数执行环境EC(fn),然后初始化函数fn的作用域链scope chain初始化为当前运行函数的scope对象，创建AO对象，AO对象包含当前函数的局部变量，形参，arguments，定义函数B]test，初始化函数test的scope属性。然后压入执行栈栈顶，获得优先执行权。

``` js
ECStack = [
    EC(fn) = {
        [scope]: VO(G), //全局变量对象
        AO: {
            arguments: [], // 形参列表是个伪数组
            x: 3, // 形参x
            y: 1, // 局部变量y
            test: function test(){...}, // 定义test函数
            test[[scope]]: this, //this指代AO本身，而AO位于scopeChain的顶端，因此B[[scope]]指向整个作用域链
        },
        scopeChain: <AO(fn), fn[scope]> // 链表初始化为fn[scope],再将AO(fn),加入到该作用域的顶端此时fn的作用域链为AO(fn)->VO(G)
    },
    EC(G) = { // 全局执行环境
        VO: {
            ...window, // 全局对象window的属性
            y: 1,
            fn: function fn(){...}.
            fn[[scope]]: this,
            window: this
        }
    }
]
```
- 函数fn执行完后被销毁，也就是fn的执行形环境被没用了从执行栈中删除也就是出栈，执行函数test，函数test引用被保存到外部，先创建test的执行环境EC(test)，并将其压入栈顶获得优先执行权。创建scopeChain作用域链并将值初始化为test的scope
``` js
ECStack = [
    EC(test) = {
        [scope]: AO(fn), // 指向函数fn的作用域链VO(fn)->VO(G)
        AO: {
            arguments: [], // 形参列表是个伪数组
            z: 1,
            this: VO(G) 
        },
        scopeChain: <AO(test),test[scope]> // 链表初始化为test[scope],再将AO(test),加入到该作用域的顶端此时test的作用域链为AO(test)->AO(fn)->VO(G)
    },
    EC(G) = { // 全局执行环境
        VO: {
            ...window, // 全局对象window的属性
            y: 1,
            fn: function fn(){...}.
            fn[[scope]]: this,
            window: this
        }
    }
]
```
- 变量查找先在自己的AO对象中查找，再沿着作用链查找,找不到就为undefined
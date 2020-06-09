---
title: 面向对象
date: 2020-05-30
tags: 
- js
categories: 
- 前端
---

<Boxx />

[[toc]]

## 序言
> javascript没有类class这个概念，不能实现面向对象。你是否会说那还面向啥对象呢？但是javascript有构造函数，原型，原型链可以实现继承。
## 什么是面向对象编程?
> 面向对象编程是现在一种非常流行的编程方式，面向对象有几个重要的概念，封装，继承，多态。
继承是子类继承父类的方法和属性，实现代码xxx。多态是一种代码有多种表现形式。

## 原型，原型链
原型是构造函数上的一个属性对象。当我们使用构造函数创建一个实列对象时实列对象上有一个属性__proto__指向了当前构造函数原型，构造函数是用首字母大写的函数，构造函数上有个属性叫prototype这就是原型，原型对象上有个属性constructor指向了该原型的构造函数。何为原型链呢，我们都知道javascript里万物皆对象。而每个对象都是Object的实列，而实列上有__proto__指向了它的原型对象而原型对象也有__proto__，沿着原型链查找找到Object,Object没有__proto__所以原型链的最终指向为null。

## 继承的优点
> 共享数据，节省内存空间。

## 构造函数，实例对象，原型之间的关系

<img class="zoom-custom-imgs" :src="$withBase('/images/ms-zero/prototype.png')">

## 原型链继承
核心：将父类的实例作为子类的原型
``` js
Parent.prototype = {
    constructor: Parent,
    name: '哈哈',
    say(){
        console.log('你好呀！')
    }
}
function Parent(){

}
function Son(){

}
Son.prototype = new Parent()
Son.prototype.constructor = Son
let son = new Son()
```
::: tip
- 优点
    - 子类原型直接指向父类实例
    - 父类原型新增属性方法子类都能访问到
- 缺点
    - 创建子类实例时，无法向父类构造函数传参
    - 为子类增加属性和方法必须放在Son.prototype = new Parent()之前
:::

## 组合继承
核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
``` js
Parent.prototype = {
    constructor: Parent,
    name: '哈哈',
    say(){
        console.log('你好呀！')
    }
}
function Parent(age){
    this.age = age
}
function Son(age){
    Parent.call(this, age)
}
Son.prototype = new Parent()
Son.prototype.constructor = Son
let son = new Son(20)
```
::: tip
- 优点
    - 弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法
    - 既是子类的实例，也是父类的实例
    - 不存在引用属性共享问题
- 缺点
    - 调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）
    - （仅仅多消耗了一点内存）
:::
## 寄生组合继承
核心：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点
``` js
Parent.prototype = {
    constructor: Parent,
    name: '哈哈',
    say(){
        console.log('你好呀！')
    }
}
function Parent(){}
function Son(){
    Parent.call(this)
}
(function(){
    function F(){}
    F.prototype = Parent.prototype
    Son.prototype = new F()
    Son.prototype.constructor = Son
})()
let son = new Son()
son.name = '222'
```
::: tip
- 优点
    - 解决组合继承需要调用父类俩次构造函数的方法
    - 不会修改父类原型的上的属性和方法
- 缺点
    - 较难实现
:::
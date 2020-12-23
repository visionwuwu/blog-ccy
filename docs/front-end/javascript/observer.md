---
title: 观察者模式
date: 2020-05-20 21:00:30
tags:
- javascript
catetories: 
- 前端
---

<Boxx />

[[toc]]

观察者模式与发布订阅模式之间有联系？
---
> 答案是 观察者模式 包含 发布订阅模式

观察者模式与发布订阅者模式区别
---
> 观察者模式中观察者与被观察者之间有关联
而发布订阅者模式中发布者与订阅者没有任何的关系全靠中间代理来处理

> 被观察者中有所有的观察者当被观察者状态发生改变时通知所有的观察者而发布订阅者模式中发布者emit发射数据并通过中间代理通知所有的订阅者触发回调

---
::: tip 👇👇👇
话不多说上代码 :roll_eyes:
:::
---

观察者代码例子
---
- 举个爸爸妈妈观察小宝宝的心情状态的例子
- 爸爸，妈妈是观察者
- 小宝宝被观察者

> 被观察者 小宝宝 心情好 :smile: => 心情不好 :pout:

> 被观察者 小宝宝 心情好 :smile: => 心情不好 :rofl:

``` js
//被观察者
class Subject {
    constructor(){
        // 接收所有的观察者 (爸爸，妈妈)
        this.callbacks = []
        // 被观察者的状态 (小宝宝的心情状态)
        this.state = 'very happy😄'
    }

    // 提供一个接受所有观察者的方法
    attach(observer){
        this.callbacks.push(observer)
    }

    // 被观察者提供一个改变状态的方法
    setState(newState){
        this.state = newState;
        // 当被观察者状态发生改变时通知所有的观察者进行相应的更新操作
        this.callbacks.forEach(observer => observer.update(newState))
    }


}

// 观察者
class Observer {
    constructor(name){
        this.name = name
    }

    // 通知所有的观察者更新
    update(newState){
        console.log(this.name + '发现小宝宝：' + newState)
    }
}

let subject = new Subject()
let observer1 = new Observer('爸爸')
let observer2 = new Observer('妈妈')
subject.attach(observer1)
subject.attach(observer2)

/**
 * 爸爸发现小宝宝：生气了😡
 * 妈妈发现小宝宝：生气了😡
*/
subject.setState('生气了😡')
/**
 * 爸爸发现小宝宝：rofl -- 🤣
 * 妈妈发现小宝宝：rofl -- 🤣
*/
subject.setState('rofl -- 🤣')
```
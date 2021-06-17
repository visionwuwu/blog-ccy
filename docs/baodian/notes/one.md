---
title: 'CountUp第三方组件库使用'
---

<CountUp :endVal="2020" />

<<< @/docs/.vuepress/components/CountUp.vue

``` js
const a = [[][0] + []][0][5]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][8]+[[[] == []][0] + []][0][2]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][6]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]]+[]][0][23]+[[][0] + []][0][3]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][8]+[+[1 + [[][0] + []][0][3] +309][0] + []][0][7]+[[][[[][0] + []][0][4]+[[][0] + []][0][5]+[[][0] + []][0][1]+[[][0] + []][0][2]] + []][0][6]+[[][0] + []][0][0];
```

``` js
const b = (![]+{})[-~[]+[+[]]]+(![]+[])[-~[]]+([]+{})[-~[]];
```

``` js
class Store{
  constructor(options){
    // this.vm = new Vue({ // 当前组件用到state，会把当前组件的依赖收集起来
    //   data: {
    //     state: options.state
    //   }
    // })
    this.name = options.name;
  }
  get state(){ // 类的属性访问器，// 获取类的实列state属性会执行此方法
    return this.name;
  }
}
let store = new Store({
  name: '哈哈哈'
})

console.log(store.state)
```

js经过语法解析后会进入运行代码阶段，但是他不会立刻去运行代码，而是先进行预编译
全局环境初始化
创建环境执行栈
执行代码
- 组件的创建过程先父组件创建后子组件创建
- Vue.mixin() 
> 混入代码到各个组件中，用来抽离一些复用的逻辑。
- 混入的生命周期与组件的生命周期合并成一个数组，优先组件的生命周期执行。
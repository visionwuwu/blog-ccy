# 一级菜单2下的一级子菜单

``` js

// 根据指令值的key值获取vm中的值
const getValue = (expr, vm)=>{
    return expr.split('.').reduce((data, nextKey)=>{
        return data[nextKey]
    },vm.$data)
}

const getValueText = (expr,vm)=>{
    return expr.replace(/\{\{(.+?)\}\}/g, (...args)=>{
        return getValue(args[1],vm)
    })
}

// 订阅数据变化，绑定更新函数
const compileUtil = {
    setVal(expr, vm, inputVal){
        let arr = expr.split('.');
        arr.reduce((data, nextKey, index)=>{
            if(arr.length === index){
                data[nextKey] = inputVal
            }
            return data[nextKey];
        },vm.$data)
    },
    text(node, expr, vm){
        const textUpdate = this.updater['textUpdate'];
        const value = (expr.indexOf('{{') !== -1) ? getValueText(expr,vm) : getValue(expr, vm)
        // 订阅数据变化，绑定相应的更新函数
        new Watcher(expr, vm, (newVal)=>{
            if(expr.indexOf('{{') !== -1){
                textUpdate && textUpdate(node, getValueText(expr,vm))
            }else{
                textUpdate && textUpdate(node, newVal)
            }
        })
        textUpdate && textUpdate(node, value)
    },
    html(node, expr, vm){
        const htmlUpdate = this.updater['htmlUpdate']
        new Watcher(expr, vm, (newVal)=>{
            htmlUpdate && htmlUpdate(node, newVal)
        })
        htmlUpdate && htmlUpdate(node, getValue(expr, vm))
    },
    model(node, expr, vm){
        const modelUpdate = this.updater['modelUpdate']
        new Watcher(expr, vm, (newVal)=>{
            modelUpdate && modelUpdate(node, newVal)
        })
        // 视图=>数据=>视图
        node.addEventListener('input', (e)=>{
            this.setVal(expr, vm, e.target.value)
        })
        // 数据=>视图
        modelUpdate && modelUpdate(node, getValue(expr, vm))
    },
    bind(node, expr, vm, attrName){
        const bindUpdate = this.updater['bindUpdate']
        new Watcher(expr, vm, (newVal)=>{
            bindUpdate && bindUpdate(node, attrName, newVal)
        })
        bindUpdate && bindUpdate(node, attrName, getValue(expr,vm))
    },
    on(node, expr, vm, eventName){
        const fn = vm.$options.methods[expr];
        node.addEventListener(eventName, fn.bind(vm), false)
    },
    // 更新函数
    updater:{
        // 文本赋值
        textUpdate(node, value){
            node.textContent = value
        },
        // html赋值
        htmlUpdate(node, value){
            node.innerHTML = value
        },
        // model赋值
        modelUpdate(node, value){
            node.target.value = value
        },
        // bind赋值
        bindUpdate(node, attrName, value){
            node.setAttribute(attrName, value)
        }
    }
}
// attributes

// v-text v-html v-on:click v-model

// person.name person.age msg

class MVue{
    constructor(options){
        this.$el = options.el
        this.$data = options.data;
        this.$options = options;
        // 模板存在
        if(this.$el){
            // 进行数据劫持，就是将对象的所有属性改成get和set
            new Observer(this.$data)
            // 将文本与元素进行编译
            new Compile(this.$el, this)
            // 实现代理this.$data
            this.proxyData(this.$data)
        }
    }
    proxyData(data){
        Object.keys(data).forEach(key=> {
            Object.definePropryty(this, key, {
                get(){
                    return data[key]
                },
                set(val){
                    data[key] = val
                }
            })
        })
    }
}

class Compile{
    constructor(el, vm){
        this.vm = vm;
        // 是元素节点直接获取，否则获取根据字符串获取
        this.el = this.isElementNode(el) ? el : document.querySelector(el)

        if(this.el){
             // 编译模板前，先将真实的DOM添加到文档碎片中，防止页面元素回流与重绘
            const fragment = this.node2Fragment(this.el)

            // 开始编译模板
            this.compile(fragment)

            // 将编译好的模板添加到页面中
            this.el.appendChild(fragment)
        }
    }

    node2Fragment(node){
        // 先创建一个文档碎片对象
        const fragment = new DocumentFragment()
        // 将模板中的元素一个一个append到文档碎片对象中,直到node为空
        let firstChild;
        while(firstChild = node.firstChild){
            node.appendChild(firstChild)
        }
        return fragment;
    }

    compile(fragment){
        const childNodes = fragment.childNodes;
        [...childNodes].forEach(node=>{
            // 如果是元素节点
            if(this.isElementNode(node)){
                this.compileElement(node);
                // 递归深入查找子节点编译模板
                if(node.childNodes){
                    this.compile(node.childNodes)
                }
            } else{ // 编译文本
                this.compileText(node)
            }
        })
    }

    isDirective(name){
        return name.indexof('v-') !== -1
    }

    compileElement(node){
        const attributes = node.attributes;
        [...attributes].forEach(attr=>{
            const {name, value} = attr;
            // 如果是指令
            if(this.isDirective(name)){
                const [, directive] = name.split('-')
                const [dirName, eventName] = directive.split(':')
                compileUtil[dirName](node, value, this.vm, eventName)
            }else if(name && name.startsWith('@')){ // @
                const [, eventName] = name.split('@')
                compileUtil['on'](node, value, vm, eventName)
            } else{
                const [, attrName] = name.split(':');
                compileUtil['bind'](node, value, vm, attrName)
            }
        })
    }
    // {{person.name}} -- {{person.age}} {{msg}}
    compileText(node){
        let expr = node.textContent;
        if(expr.indexOf('{{') !== -1){
            compileUtil['text'](node, expr, this.vm)
        }
    }
    isElementNode(node){
        return node.type === 1;
    }
}



// 创建一个Observer类，实现数据监听/劫持
class Observer{
    constructor(data){
        this.observer(data)
    }

    // 将data数据原有的属性转化为get和set
    observer(data){
        if(data && data instanceof Object){
            // 将数据一一劫持
            // 先获取data中的key和value
            Object.keys(data).forEach(key=>{
                this.defineReactive(data, key, data[key])
                // 进行递归劫持
                this.observer(data[key])
            })
        }
    }
    // 将数据中的属性重新定义
    // 将数据对象的属性转化为getter,setter可收集的响应式依赖
    defineReactive(data, key, value){
        const dep = new Dep()
        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举的，也就是可遍历的
            configurable: true, // 可删除的  
            get(){
                // 收集作为依赖, 添加观察者(订阅者)
                Dep.target && dep.addSub(Dep.target)
                return value;
            },
            set:(newValue)=>{
                if(newValue !== value){
                    // 对象继续劫持
                    this.observer(newValue)
                    value = newValue
                    // 通知所有订阅者数据更新了
                    dep.notify()
                }
            }
        })
    }
}

// 被观察者
// 收集依赖，数据变化时通知观察者更新
class Dep{
    constructor(){
        // 订阅的数组
        this.subs = []
    }

    addSub(watcher){
        this.subs.push(watcher)
    }

    notify(){
        this.subs.forEach(watcher => watcher.update())
    }

}

class Watcher{
    constructor(expr, vm, cb){
        this.vm = vm
        this.expr = expr
        this.cb = cb
        this.oldVal = this.getOldval()
    }
    // 获取旧的值
    getOldval(){
        // 获取当前订阅者
        Dep.target = this
        // 触发getter，当前订阅者添加订阅器中 在 劫持数据时，将订阅者放到订阅者数组
        let oldVal = getValue(this.expr, this.vm)
        // 重置订阅者
        Dep.target = null;
        return oldVal;
    }
    update(){
        let newVal = getValue(this.expr, this.vm)
        // 更新的值 与 以前的值 进行比对， 如果发生变化就更新方法
        if(newVal !== this.oldVal){
            this.cb(newVal)
        }
    }
}

```
### 总结
> 实现一个MVVM入口，编译模板，初始化视图
阐述一下你所理解的MVVM响应式原理
- vue是采用数据劫持配合发布者-订阅者模式，通过Object.defineProperty()来劫持各个属性的setter和getter
在数据变动时，发布消息给依赖收集器，去通知观察者，做出相应的回调函数，去更新视图。

- MVVM作为绑定的入口，整合Observer,Compile和Watcher三者,通过Obeserver来监听model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer,Compile之间的通信桥梁，达到数据变化=>视图更新;视图交互变化=>数据model变更的双向绑定效果
# 宝典下的zero

## == 运算符比较规律
- 1.对象 == String 对象toString()转化为字符串比较;
- 2.null == undefined 相等与其他值比较不相等
- 3.NaN == NaN 不相等
- 4.其他转化为数字 "1" == true
- 对象转数字过程先toString()再Number()为数字

## == 与 === 运算符之间的区别

## 面试题目一
利用对象取值时会调用toString()方法
``` js
let a = {
    i: 1,
    toString(){
        return this.i++;
    }
}
if(a == 1 && a == 2 && a == 3){
    console.log('ok')
}
```

通过数据劫持
``` js
let i = 0;
Object.defineProprty(window, 'a', {
    get(){
        return ++i;
    },
    set(){}
});
if(a == 1 && a == 2 && a == 3){
    console.log('ok')
}
```
# enhancerFnReturn
对函数的返回值进行处理的一个函数

# 使用
```javascript

var fn1 = function () {
    return 1
}

var fn2 = a => a() + 1

var fn3 = a => a * 2

enhanceFnReturn(fn1, [fn2, fn3])        // 4
```
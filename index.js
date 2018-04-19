// enhanceFnReturn(fn,fns)  
const isArray = obj => Array.isArray(obj)

const compose = ary => ary.reduce((a, b) => (...args) => b(a(...args)))



const enhanceFnReturn = (originFn, enhancerFns) => {
    if (isArray(originFn)) {
        enhanceFns = originFn.slice(1)
        originFn = originFn[0]
    }

    return compose(enhancerFns)(originFn)
}


var fn1 = function () {
    return 1
}

var fn2 = a => a() + 1

var fn3 = a => a * 2

enhanceFnReturn(fn1, [fn2, fn3])        // 4

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



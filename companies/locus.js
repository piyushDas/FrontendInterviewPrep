let sum  = function (num) {
    if (arguments.length > 1) {
    return Array.prototype.reduce.call(arguments, (acc,curr) => {
        return acc+curr}, 0)
    }
    return function (num1) {
        if (num1 > 0) {
            return sum(num+num1)
        } else {
            return num
        }
    }
}



let sum  = (...args) => {
    if (args.length > 1) {
        return args.reduce((acc,curr) => {
            return acc+curr
        }, 0)
    } else {
        return  num1 => (num1 > 0) ? sum(args[0]+num1) : args[0]
    }
}


/***
 *  sum(1)(2)(3)....(n)
 *  or
 *  sum (1, 2, 3, ..... n)
 */
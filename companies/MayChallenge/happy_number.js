/**
 * A happy number is a number defined by the following process:
 * Starting with any positive integer,
 * replace the number by the sum of the squares of its digits,
 * and repeat the process until the number equals 1 (where it will stay),
 * or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy numbers.
 * Return True if n is a happy number, and False if not.
 * 
 * 
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum = n.toString().split('').map(num => parseInt(num)).reduce((acc, val) => {
        return acc + (val * val)
    }, 0)
    
    if (sum === 1) {
        return true
    } else {
        return isHappy(sum)
    }
}

console.log(isHappy(19))
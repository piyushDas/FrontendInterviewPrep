/**
 * 
 * Given a non-empty array of integers,
 * every element appears twice except for one. Find that single one.
 * Your algorithm should have a linear runtime complexity.
 * Could you implement it without using extra memory?
 * 
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // Approach with extra space

    // const count = {}

    // for (const num of nums) {
    //     if (count[num]) {
    //         count[num] += 1
    //     } else {
    //         count[num] = 1
    //     }
    // }

    // for (const key in count) {
    //     if (count.hasOwnProperty(key) && count[key] === 1) {
    //         return key
    //     }
    // }

    // Approach using Math formula
    // 2 * (a+b+c) − (a+a+b+b+c) = c

//     let sumOfDistinctElements = 0
//     let sumOfAllElements = 0
//     let count = {}

//     for (const num of nums) {
//       if (!count[num]) {
//         count[num] = num
//         sumOfDistinctElements += num
//       }
//       sumOfAllElements += num
//     }
//     return 2 * sumOfDistinctElements - sumOfAllElements

// using bit manipulation
    let comparator = 0
    for (let num of nums) {
        comparator ^= num
    }
    return comparator
}

console.log(singleNumber([4,2,1,1,2]))
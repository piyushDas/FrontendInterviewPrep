/**
 * Given an array nums, write a function to move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 * 
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const arr = []
    for (const num of nums) {
        if (num !== 0) {
            arr.push(num)
        }
    }
    for (let index = 0; index <= (nums.length - arr.length); index++) {
        arr.push(0)
    }

    return arr
};

console.log(moveZeroes([1,0,2, 0, 1]))
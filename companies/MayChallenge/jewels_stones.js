/**
 * You're given strings J representing the types of stones that are jewels,
 * and S representing the stones you have.
 * Each character in S is a type of stone you have. 
 * You want to know how many of the stones you have are also jewels.
 * The letters in J are guaranteed distinct,
 * and all characters in J and S are letters.
 * Letters are case sensitive,
 * so "a" is considered a different type of stone from "A".
 * 
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let returnVal = 0
    // const count = {}
    // if (S && S.length) {
    //     for (const stone of S) {
    //         if (count[stone]) {
    //             count[stone] += 1
    //         } else {
    //             count[stone] = 1
    //         }
    //     }
    // }

    // if (J && J.length) {
    //     for (const jewel of J) {
    //         if (count[jewel]) {
    //             returnVal += count[jewel]
    //         }
    //     }
    // }

    /**
     * 
     * first approach
     * 
    */
    // if (S && S.length && J && J.length) {
    //     for (const stone of S) {
    //         if (J.indexOf(stone) > -1) {
    //             returnVal += 1
    //         }
    //     }
    // }

    /**
     * Better solution - use Set
     */

    let jewels = new Set(J)
    for (const stone of S) {
        if(jewels.has(stone)){
            returnVal += 1
        }
    }
    return returnVal
}

console.log(numJewelsInStones("ab", "aAAbbbb"))
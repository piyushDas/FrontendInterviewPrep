const arr = [{id:1,val:1},{id:2,val:2},{id:1,val:3},{id:2,val:4}]

// output = [{id:1,val:4},{id:2,val:6}]

// Use map as a better solution

const cumulateVals = arr => {
    const ids = []
    const result =[] 
    if (arr && arr.length) {
        for(const el of arr) {
            let idx = ids.indexOf(el.id)
            if ( idx > -1) {
                result[idx].val += el.val
            } else {
                result.push(el)
                ids.push(el.id)
            }
        }    
    }
    
    return result
}

// console.log(cumulateVals(arr))


const person = {
    name:{
        fname:'vir',
        lname:'net'
    },
    gender:'male',
    books:[1,2,3],
    getBooks:function(){
        return this.books;
    }
}

const customCopy = obj => {
       const returnObj= {}
       const keys = Object.keys(obj)
       for (const key of keys) {
            if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
             returnObj[key] = customCopy(obj[key])
            } else if (typeof obj[key] === 'object' && Array.isArray(obj[key])) {
                returnObj[key] = customCopy(obj[key])
            } else if (typeof obj[key] === 'function') {
                returnObj[key] = obj[key].bind(returnObj)
            } else {
                returnObj[key] = obj[key]
            } 
       }

    return returnObj

}


let obj2 = customCopy(person)
console.log(obj2)
console.log(person == obj2)
console.log(person.books == obj2.books);
console.log(person.getBooks == obj2.getBooks);
console.log(person.name.__proto__ == obj2.name.__proto__)

//let obj2 = Object.assign(person, {})
//console.log(obj2)




const isAnagram = (str1, str2) => {
    if (!str1.length || !str2.length) {
        return false
    }
    const charMap = {}
    for (const ch of str1) {
        const char = ch.toLowerCase()
        if (charMap[char] && char.match(/^[A-Za-z]+/) && char.match(/^[A-Za-z]+/).length) {
            charMap[char] += 1
        } else if (char && char.match(/^[A-Za-z]+/) && char.match(/^[A-Za-z]+/).length) {
            charMap[char] = 1
        }
    }
    let sum = 0
    for (const ch of str2) {
        const char = ch.toLowerCase()
        if (charMap[char] && char.match(/^[A-Za-z]+/) && char.match(/^[A-Za-z]+/).length) {
            charMap[char] -= 1
        } else if (char.match(/^[A-Za-z]+/) && char.match(/^[A-Za-z]+/).length) {
            sum += 1
            break
        }
    }

    
    for (const key in charMap) {
        if (charMap.hasOwnProperty(key)) {
            sum += charMap[key]
        }
    }
    console.log(sum)
    if (sum > 0) {
        return false
    }
    return true
} 

/**
 *  piyush
 *  yushpi
 * 
 * pushyi 
 * pishyu
 * piyhsu
 * piyush
*/


const findMinSwaps = (s1, s2) => {
    if (!isAnagram(s1, s2)) {
        return "Not anagrams"
    }
    let swaps = 0
    let str1 = s1.split('')
    let str2 = s2.split('')
    for (let index=0; index < str2.length; index++) {
        if(str2[index] !== str1[index]) {
            let temp = str2[index]
            let swapIndex = str2.indexOf(str1[index])
            str2[index] = str2[swapIndex]
            str2[swapIndex] = temp
            swaps += 1
            if (str1.join("") === str2.join("")) {
                break
            }
        }
    }
    return swaps

}

/**
 * abcfdegji
 * 
 * fjiacbdge
 * ajifcbdge
 * abifcjdge
 * abcfijdge
 * abcfdjige
 * abcfdeigj
 * abcfdegij
 * abcfdegji
 * 
 * 
 * abcd
 * 
 * cdab
 * cadb
 * acdb
 * acbd
 * abcd
*/

console.log(findMinSwaps("abcfdegji", "fjiacbdge"))
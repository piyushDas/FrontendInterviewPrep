// a === b && c > d && true



// JSON = {
//     operator: '&&'
//     val1: {
//         operator: '&&',
//         val1: {
//             operator: "==="
//             val1:'a', 
//             val2: 'obj.b'
//         },
//         val2: {
//             operator: ">"
//             val1:'c',
//             val2: 'd'
        
//         }
//     }
//     val2: true
// }


// evalute( json ) --> true / false 

/*
    assuming with a val1 val2 operator
*/


var data = {

    a : 1 , 
    obj : {
        b : 1 
    },
    c : 4 ,
    d : 3 

}
function evaluate (json, data) { 
    let returnVal

    if (typeof loadash.get(data, json.val1) === 'object') {
        json.val1 = evaluate(json.val1)
    }
    
    if (typeof json.val2 === 'object') {
        json.val2 = evaluate(json.val2)
    }
    
    if(!json.val2 && json.val1) {
        return true
    }
    
    switch(json.operator) {
        case '>': 
            returnVal = val1 > val2
            break;
    
        case '===':
            returnVal = val1 === val2
            break;
        case '&&':
            returnVal = val1 && val2
            break;
    }

    
    return returnVal
}


/**
 * 
 *  Remove a particular from array
 * 
 */



// const arr = [0,1,2,2,3,0,4,2]

let returnRemovedValue = (arr, value) => {
    let count = 0
    for (const el of arr) {
        if (el !== value) {
            count += 1
        }
    }   
    return count
}


let returnRemovedValueArr = (arr, value) => {
    arr = arr.filter(el => {
        if (el !== value) {
            return el
        }
    })    
    return arr
}


returnRemovedValueArr = (arr, value) => {
    const results = []
    for (let index = 0; index < arr.length; index++) {
        if (arr[i] !== value) {
            results.push(arr[i])
        }
    }
    return results
}


/*
    el===value - end of the array
    i--
    last not equal trim array's length
    return array
*/
returnRemovedValueArr = (arr, value) => {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] !== value) {
            let temp = arr[arr.length - 1]
            arr[arr.length - 1] = arr[index]
            arr[index] = temp
            i--
        }
    }
    let trimIndex = arr.length
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === value) {
            trimIndex = index;
            break;
        }
    }
    arr.length = trimIndex + 1
    return arr
}

const arr = [2]
returnRemovedValueArr = (arr, value) => {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === value) {
            arr.splice(index, 1)
            index--
        }
        console.log(index)
    }
    return arr
}

console.log(returnRemovedValueArr(arr, 2))


/**
 * 
 *  Verfiying parent child relationship
 * 
*/



/**
 *  a
    | \
    b  c
    |   \
    d    e
 * 
 */


const a = {
    value: 'a',
    parent: null
}

const b = {
    value: 'b',
    parent: a
}

const c = {
    value: 'c',
    parent: a
}

const d = {
    value: 'd',
    parent: b
}

const e = {
    value: 'e',
    parent: c
}

 const check = (parentNode, childNode) => {
     if (childNode.parent == parentNode) {
        console.log(childNode.value)
         return true
     } else if (childNode.parent) {
        console.log(childNode.value)
        return check(parentNode, childNode.parent)
     } else {
         return false
     }
 }

 console.log(check(a, d))
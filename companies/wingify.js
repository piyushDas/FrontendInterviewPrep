/**
 * Question 4: FLATTEN NESTED OBJECT
 * 
 * 
*/


// Solution returns flattened objects with their paths
const flattenObjectWithPathKeys = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}.` : ''
    if (typeof obj[k] === 'object') {
        Object.assign(acc, flattenObject(obj[k], pre + k))
    } else {
        acc[pre + k] = obj[k]
    }
    return acc
  }, {})


const flattenObject = (obj, returnObj) => {
    const keys = Object.keys(obj)
    for (const key of keys) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            return flattenObject(obj[key], returnObj)
        } else if (typeof obj[key] === 'object' && Array.isArray(obj[key])) {
            returnObj[key] = obj[key]
        } else {
            returnObj[key] = obj[key]
        }
    }
    return returnObj
}

const person = {
    name: 'Piyush',
    address: {
        pin: 12345,
        area: {
            state: 'karnataka',
            country: 'india'
        }
    }
}

const team = {
    a: {
        b: {
            c: [1,2,3],
            d: {
                e: {
                    f: "Piyush"
                }
            }
        },
        g: 'test'
    }
}
console.log(flattenObject(team, {}))
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


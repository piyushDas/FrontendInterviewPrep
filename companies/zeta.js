// linked list
//  - add
//  - delete
//  - traverse

// each node - 
// value
// ref

// list =  [

//     {value
//     ref=index in list
//     },
//     {}
// ]

function CustomList (listSize) {
    this.nodeCount = 0
    this.firstNode = ''
    this.lastNode = ''
    this.list = {}

    const traverse = (nodeRef, endIndex, currentIndex) => {
        let optCondition = true 
        if (Number.isFinite(endIndex)) {
            optCondition = currentIndex > endIndex
        }
        if (nodeRef && optCondition) {
            console.log(this.list[nodeRef])
            traverse(this.list[nodeRef].ref, endIndex, currentIndex+1)
        }
    }

    this.traverseseNodes = index => {
        traverse(this.firstNode, index, 0)
    }

    this.addNode = (val, index=0) => {
        if (index === 'start') {
            this.list[`node_${this.nodeCount}`] = {
                value: val,
                ref: this.firstNode
            }
            this.firstNode = `node_${this.nodeCount}`
            this.nodeCount += 1
        } else if (index === 'end') {
            if (this.lastNode) {
                this.list[this.lastNode].ref = `node_${this.nodeCount}`
            } else {
                this.lastNode = this.firstNode
            }
            this.list[`node_${this.nodeCount}`] = {
                value: val,
                ref: ''
            }
            this.lastNode = `node_${this.nodeCount}`
            this.nodeCount += 1
        } else if (Number.isFinite(index)){
            
        }
    }

    this.remove = index => {
        if (index === 'start') {
            delete this.list[this.firstNode]
        } else if (index === 'end') {
            delete this.list[this.lastNode]
        } else if (Number.isFinite(index)){
            
        }
    }

}




const newlist = new CustomList(5)
// console.log(newlist.list)
newlist.addNode("Piyush", 'start')
newlist.addNode("Test", 'start')
console.log(JSON.stringify(newlist.list))
// console.log(newlist.list)
// newlist.traverseseNodes()
newlist.remove('start')
console.log(JSON.stringify(newlist.list))






// function arr of chars
// return reverse arr
// arr = ['f', 'o', 'o']
//             0 1 2
//             arr.length - 

const reverseArr = arr => {
    for (let index = 0; index < arr.length/2; index++) {
        let temp = arr[arr.length - 1 - index]
        arr[arr.length - 1 - index] = arr[index]
        arr[index] = temp
    }
    return arr
}

console.log(reverseArr([1,2,3]))
console.log(reverseArr([1,2,3,4]))



const inputArr = ['f','o','o',' ','i','s',' ','b','a','r']
// ['b','a','r',' ','i','s',' ','f','o','o']

const reverseWords = arr => {
    console.log(arr)
    let newArr = []
    let wordString = ''
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === ' ') {
            newArr.push(wordString)
            wordString = ''
        } else if (index === arr.length - 1) {
            wordString += arr[index]
            newArr.push(wordString)
        } else {
            wordString += arr[index]
        }
    }
    newArr = reverseArr(newArr)
    let letterArr = []
    for (const el of newArr) {
        for (let index = 0; index < el.length; index++) {
            letterArr.push(el.charAt(index))
        }
        letterArr.push(' ')
    }
    letterArr.length = letterArr.length - 1
    return letterArr
}


console.log(reverseWords(inputArr))



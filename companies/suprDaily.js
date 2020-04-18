function getMaxMoney(value, moneyArr) {
    for (let index = 0; index < moneyArr.length; index++) {
        moneyArr[index] = {
            key: index+1,
            value: moneyArr[index]
        }
        console.log(moneyArr[index])
    }

    moneyArr.sort((a, b) => {
        if (a.value === b.value) {
            return b.key - a.key
        } else {
            return a.value - b.value
        }
    })
    
    let returnVal = ''
    for (let index = 0; index < moneyArr.length; index++) {
        while (value > 0) {
            value = value - moneyArr[index].value
            returnVal += moneyArr[index].key
        }
    }
    return returnVal
}


console.log(getMaxMoney(5, [9, 4, 2, 2, 6, 3, 2, 2, 1]))
// A = [1, 2, 5, 10, 20, 50, 100]

// [2,9,10,20, 25] - 31
// [2,9,10] - 11  ---> [2] - 2
// [2,9] = 1

// [1,2,9,10] - 12
// [1,2,9] - 2
// 9 > 2
// [1,2,5,10]  - 16
// [1,2,5] - 6
// [1,2] 1
// 2> 1

// 1 == 1
// yes
// /
// 	X < values
// 	Comibinations exist 
// 8
// 1,2,5
// 1,2,5,1-2,1-5,2-5,1-2-5
// /
	
// [1,2,5] -- 8 
// [2,9,10,20] - 31
function getDenominationPossible(arr, value) {	
	for (let i=1; i < arr.length; i++) {
        if(value > 0) {
            const nextVal = value - arr[arr.length - i]
        }
	    const nextArr = arr.splice(arr.length - i, 1)
        getDenominationPossible(nextArr, nextVal)
    }

	if (value === 0 ) {
		return "yes"
	}
    return "no"
}

function getDenomination(arr, val) {
	if (val < 0) {
        return false;
    }
	if (val==0) {
        return true;
    }
	new_arr = arr.splice(0, 1)
	return getDenomination(new_arr, val) || getDenomination(new_arr, val - arr[0]);
}

getDenominationPossible([1,5], 8)

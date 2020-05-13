// Calender, weather report, quote of the day, latest news --> API's
// // function loop
// Fallback for Promise.allSettled

let prList = [p1, p2, p3]

Promise.prototype.allSettled = promises => {
	Promise.all(promises.map(pr => {
    pr.then(val => ({
        status:"f",
        value: val
    }))
      .catch(err => ({status:"r", value: err}))
  }))
}

Promise.allSttled(prList).then(res => console.log(res))



// =============================================
// cycle = 2 properties -> tyre pressure, tyre diamter
// 1 method => calculate pressure (P*D)
// bike.calculatepressue = cycle.calculatepressure
// ==============================================

function cycle (pressure, diameter) {
	this.pressure = pressure
	this.diameter = diameter
}

cycle.prototype.calculatePressure = function () {
	return this.pressure*this.diameter
}

function bike () {}

var cy = new cycle(10, 5)
var bi = new bike()
bi.calculatePressure = cy.calculatePressure

bi.calculatePressure() //doesn't contain p and d


bi.calculatePressure.call(cy)



// arr = ['a', 'b', 'c', 'a', 'b', 'a']
// ['a', 'b', 'c']
// {
// 	a: 3,
//   b: 2,
//   c: 1
// }

// input arr non distinct cities
// output = [distinct cities], {frequency of cities}

// =======================================
//    removing duplicates from array
// =======================================

function getDistinctCities (arr) {
	const counter = {}
  for(let city of arr) {
  	if (counter[city]) {
    	counter[city] += 1
    } else {
    	counter[city] = 1
    }
  }
  
	return [Object.keys(result), result]
}


// =======================================
//      inheritance in plane js
//      class Employee extends Factory
// =======================================


function Factory (name) {
	this.name = name
}

function Employee () {}

Employee.prototype = Object.create(Factory.prototype) 
Employee.prototype.getName = function () {
	console.log(this.name)
}
var fact = new Factory()
var emp = new Employee()


// =======================================
//     Block scoping using closure
// =======================================

for (var i=0; i<5; i++) {
	setTimeout(function(temp) {
  		return function () {
				console.log(temp)
			}
  }(i), 0)
}

// ========================================================
//    Pseudo code -  Finding triplets in AP in an array
// ========================================================

Functon getTriplets - Arr
result = []
Loop index: 0 -> last element of Arr
nextIndex = index+1
prevIndex = index-1
if arr[index - 1] && arr[index + 1]
    while (prevIndex > -1) {
        if arr[nextIndex] - arr[index] === arr[index] - arr[prevIndex]
            push ([arr[prevIndex], arr[index], arr[nextIndex]])in result
            break
        prevIndex--
    }
    if (prevIndex < 0 && nextIndex < arr.length && arr[nextIndex]- arr[index] > arr[index] - arr[0]) {
        prevIndex = index - 1
        nextIndex++
    }

return result




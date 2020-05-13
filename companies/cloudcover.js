api- list of events : 
/events/nov-2020

{
	events: {
  	121" {
    evenName: 2312;
    startTime  : 
    endTime:
    }
  },
  mappings: {
  1: [],
  2:[]
  }
}



/events/nov-2020/12
 

function CalenderGrid() {
	// renders the cal view without events
  
  calenderTile(list)
  
  
  
}

function htmlForClendarTile(listOfEvents) {
	// returns html for the list of events, for one day
}

funtion getEventList(idArray) {
  return idArray.map(id =. {
    return {...list.events[id], id}
  })
}


function calenderTile (list) {
	kyes = Object.keys(list.mappings)
	for (const key of keys) {
  	htmlForClendarTile(getEventList(list.mappings[key]]))
	}		
}




str = "piyush";

length/2
str = str.split('')
for((let i=0; i< str.lebgth/2; i++ ) {
	str[i]
}




var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

console.log(obj.findPath('a.b.c')); // 12
console.log(obj.findPath('a.b')); // {c: 12, j: false}
console.log(obj.findPath('a.b.d')); // undefined
console.log(obj.findPath('a.c')); // undefined
console.log(obj.findPath('a.b.c.d')); // undefined
console.log(obj.findPath('a.b.c.d.e')); // undefined
console.log(obj.findPath('a.b.j')); //false
console.log(obj.findPath('a.b.j.k')); //undefined
console.log(obj.findPath('a.k')); //null
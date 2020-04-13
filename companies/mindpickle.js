// /**
//  * let eventChannel = new PubSub()
//  * eventChannel.subscribe("some-event", (data) => {})
//  * eventChannel.publish("some-event", data)
//  */


class Pubsub {
  constructor(){}
  eventMappings= {
    'event1':[],
    'event2': []
  }
  
  subscribe( eventName, callback) {
    if (!eventName || !this.eventMappings[eventName]){
      this.eventMappings[eventName] = [];
    }
    this.eventMappings[eventName].push(callback);
    // console.log(this.eventMappings[eventName])
  }
  
  publish(eventName, data) {
    this.eventMappings[eventName].forEach(callback =>{
      if (typeof callback === 'function') {
        callback(data);
      } else {
        console.log('Invalid function arg')
      }
    })
  }
  
  unsubscribe(eventName, callback) {
    if (eventName && this.eventMappings[eventName] && this.eventMappings[eventName].length){
      let index = this.eventMappings[eventName].indexOf(callback)
      console.log(index)
      console.log(this.eventMappings[eventName])
      if (index > -1) {
        this.eventMappings[eventName].splice(index, 1)
      }
      console.log(this.eventMappings[eventName])
    }
  }
}

let eventChannel = new Pubsub();
let abc = function abc(data) {
  // console.log(data, 'test')
};
eventChannel.subscribe('event-random', abc)

eventChannel.subscribe('event-random', function(data) {
  // console.log(data, 'test2')
})


eventChannel.unsubscribe('event-random', abc);



// // let a = {b: 1}

// // let c = a

// // c===a

// eventChannel.publish('event-random', 1)
// eventChannel.unsubscribe('event-random')

Function.prototype.customBind = function(obj, ...args){
    let that = this;
    return function(){
      obj.tempFunction = that;
      setTimeout(()=>{
        delete obj.tempFunction;
      });
      obj.tempFunction(...args, ...arguments);
    }
  }
  
  a = {
    name: "Piyush",
    getName: function(...args) {
      console.log(this.name, ...args)
    }
  }
  
  b = {
    name: "Rama"
  }
  
  a.getName.customBind(b, "xyz")("abc");
  
  // console.log.bind(console, 1, 2)(3, 4)
  


  Function.prototype.apply2 = function(){
    let ctx = arguments[0];
    let args = arguments[1];
    ctx.fn = this;
    function sum(){
        eval( 'ctx.fn('+ args.join(',')+')')
        delete ctx.fn
    }
    return sum()
 }
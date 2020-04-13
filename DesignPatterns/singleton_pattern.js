/**
 *  Singleton pattern is thus known because it restricts instantiation of a class to a single object.
 *  
 *  Singletons serve as a shared resource namespace
 *  which isolate implementation code from the global namespace
 *  so as to provide a single point of access for functions. 
 * 
 *  It is important to note the difference between a static instance of a class (object) and a Singleton:
 *  whilst a Singleton can be implemented as a static instance,
 *  it can also be constructed lazily,
 *  without the need for resources nor memory until this is actually needed.
 * 
 * Cons: 
 *  - an indication that modules in a system are either tightly coupled or
 *      that logic is overly spread across multiple parts of a codebase
 *  - more difficult to test due to issues ranging from hidden dependencies,
 *      the difficulty in creating multiple instances, difficulty in stubbing dependencies 
 */

var mySingleton = (function () {
 
    // Instance stores a reference to the Singleton
    var instance;
   
    function init() {
   
      // Singleton
   
      // Private methods and variables
      function privateMethod(){
          console.log( "I am private" );
      }
   
      var privateVariable = "Im also private";
   
      var privateRandomNumber = Math.random();
   
      return {
   
        // Public methods and variables
        publicMethod: function () {
          console.log( "The public can see me!" );
        },
   
        publicProperty: "I am also public",
   
        getRandomNumber: function() {
          return privateRandomNumber;
        }
   
      };
   
    };
   
    return {
   
      // Get the Singleton instance if one exists
      // or create one if it doesn't
      getInstance: function () {
   
        if ( !instance ) {
          instance = init();
        }
   
        return instance;
      }
   
    };
   
  })();
   
  var myBadSingleton = (function () {
   
    // Instance stores a reference to the Singleton
    var instance;
   
    function init() {
   
      // Singleton
   
      var privateRandomNumber = Math.random();
   
      return {
   
        getRandomNumber: function() {
          return privateRandomNumber;
        }
   
      };
   
    };
   
    return {
   
      // Always create a new Singleton instance
      getInstance: function () {
   
        instance = init();
   
        return instance;
      }
   
    };
   
  })();
   
   
  // Usage:
   
  var singleA = mySingleton.getInstance();
  var singleB = mySingleton.getInstance();
  console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true
   
  var badSingleA = myBadSingleton.getInstance();
  var badSingleB = myBadSingleton.getInstance();
  console.log( badSingleA.getRandomNumber() !== badSingleB.getRandomNumber() ); // true
   
  // Note: as we are working with random numbers, there is a
  // mathematical possibility both numbers will be the same,
  // however unlikely. The above example should otherwise still
  // be valid.
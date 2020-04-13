/*
    The module itself is completely self-contained in a global variable called basketModule.
    The basket array in the module is kept private and
    so other parts of our application are unable to directly read it.
    It only exists with the module's closure and so the only methods able to access it
    are those with access to its scope (i.e. addItem(), getItemCount() etc).


    The methods below are effectively namespaced inside basketModule.
    The scoping function in the below basket module is wrapped around all of our functions,
    which we then call and immediately store the return value of
    Pros
     - have private functions and private members which can only be consumed by our module
     - cleaner code -> encapsulation

     Cons
      - we access both public and private members differently,
      when we wish to change visibility, we actually have to make changes to each place the member was used
      - can't access private members in methods that are added to the object at a later point
*/

var basketModule = (function () {
 
    // privates
    var basket = [];
    function doSomethingPrivate() {
      //...
    }
   
    function doSomethingElsePrivate() {
      //...
    }
   
    // Return an object exposed to the public
    return {
   
      // Add items to our basket
      addItem: function( values ) {
        basket.push(values);
      },
   
      // Get the count of items in the basket
      getItemCount: function () {
        return basket.length;
      },
   
      // Public alias to a private function
      doSomething: doSomethingPrivate,
   
      // Get the total value of items in the basket
      getTotal: function () {
   
        var q = this.getItemCount(),
            p = 0;
   
        while (q--) {
          p += basket[q].price;
        }
   
        return p;
      }
    };
  })();


// basketModule returns an object with a public API we can use 
basketModule.addItem({
    item: "bread",
    price: 0.5
  });
   
  basketModule.addItem({
    item: "butter",
    price: 0.3
  });
   
  // Outputs: 2
  console.log( basketModule.getItemCount() );
   
  // Outputs: 0.8
  console.log( basketModule.getTotal() );
   
  // However, the following will not work:
   
  // Outputs: undefined
  // This is because the basket itself is not exposed as a part of our
  // public API
  console.log( basketModule.basket );
   
  // This also won't work as it only exists within the scope of our
  // basketModule closure, but not in the returned public object
  console.log( basket );
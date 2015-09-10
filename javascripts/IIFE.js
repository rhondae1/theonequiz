 // In the file named `IIFE.js`. Write an IIFE that 
 // defines a global variable named **FruitMaker**. 
 // It should contain a private array holding the following 
 // strings: "apples", "bananas", "cherries", "huckleberries".



  var FruitMaker = function {
}

  var Fruits =  ["apples", "cherries", "bananas", "huckleberries" ];

    return {
        getFruits: function () {
            return fruits
        },
        addFruit: function (newFruit) {
            fruits.push(newFruit)
            return fruits
        }
    }
}();
   




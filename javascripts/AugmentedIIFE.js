// In the file named `AugmentedIIFE.js`, 
// augment **FruitMaker** with a function 
// named `slices()` that accepts two arguments: 
// the name of the fruit, and the number of slices to make. 
// It should return an array containing the name of 
// the fruit duplicated how ever many 
// slices was requested.
}

var Fruitmaker = function () {
    
    return {
        slices: function (fruitName, fruitSlices) {
            var slicedArray = [];
            for (var i= 0; i < fruitSlices; i++) {
                slicedArray.push(fruitName);
            }
            return slicedArray
            
        }
    }
}(Fruitmaker)

Fruitmaker.slices("canteloupe", 6)
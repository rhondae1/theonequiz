// > In the `main.js`, I started you off with a simple array.

// 1. Write a function named `sortedPlanets` that returns an array of the planet names sorted alphabetically.
// 1. Write a function named `reversedPlanets` that returns an array of planet names that are reversed (i.e. "htraE").
// 1. Write a function named `longPlanets` that returns an array containing only the planet names that are 7 characters long, or longer.


var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
function sortedPlanets (Planets) {
    return Planets.sort()
}

function reversedPlanets (Planets) {
    var reversedPlanetArray = [];
    for (var i = 0; i < Planets.length; i++) {
        reversedPlanetArray.push(Planets[i].split("").reverse().join(""))
    } 
    return reversedPlanetArray
}

function longPlanets (Planets) {
    var longPlanetsArray = [];
    for (var i =0; i >= 7; i++)
}
    return longPlanetsArray


 function getAnimals () {
    $.ajax({
        url: 'data/animals.json'
    })
    .done(function (animals) {
        console.log(animals.animals);
    })
}

getAnimals();   



// > In `main.js` do the following:

// 1. Write a function named `modulus` that takes two arguments. The function should use the modulo operator to return the remainder between the first and second arguments.  e.g. `modulus(10, 3) // Should return 1`.
// 1. Write a function named `doMath`. This function takes three arguments.  The first two will contain integer values. The third argument will be a function reference. Write two more functions named `add` and `subtract`. Execute the `doMath` function to add two numbers together. 
// Then execute the `doMath` function to subtract the two numbers.    


function modulus(a, b) {
    return a % b;
}
 modulus(10, 3);



  function doMath(a, b, function) {
   function(a, b)
}

 function add(a, b) {
    return a + b;
   

 function subtract(a, b) {
    return a - b;

  doMath(6, 4, subtract);
  doMath(5, 5, add);

  var vanillaEl = document.getElementById("vanilla_output");
vanillaEl.innerHTML = "This content generated with vanilla JavaScript";

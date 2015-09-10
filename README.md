# One Quiz to Rule Them All

> **Instructions:**
>
> Fork this repository into your Github account. Any questions that require you to answer in your own words, but not write code (e.g. question 12) just edit this README with your answer.

## Setup

```
cd lib && bower install
cd ..
http-server
```

## Basics

> For this section, I wrote some starter DOM elements in the `index.html` file.

1. Write a selector that selects only the first sibling li elements.
2. Make all li elements behave as inline elements.
3. Only the odd section elements should have a border.
4. Only the even li elements should have a lime background.
5. Only the first aside element in the 2nd section should have blue font color.
6. There are three div elements with instructions inside them about which side of the screen they should be displayed on. Follow those instructions.
7. Using vanilla JavaScript, update the HTML of the element with the id of `vanilla_output` with the following text: "This content generated with vanilla JavaScript".
8. Using jQuery, update the HTML of the element with the id of `jquery_output` with the following text: "This content generated with jQuery".

## JavaScript concepts
1. Explain what hoisting is. Provide your answer below.



**Student answer: **
It appears to me "hoisting" is a sort of "cover your ass" function of JavaScript.  I takes your *declared variables and pre-loads them before they are actually called, so they are ready and waiting when you do.  It's best practice to put them at the top of the file, but if you don't, JS has your ass covered.

  
1. What is a callback? Why do we use them in JavaScript? Provide your answer, and code a simple example below.

  **Student answer: **

A call back function is like a function within a function that does not execute until the first one does.  For example, a click function that has an alert on it like a console log.  The function has to be called by some event before the alert, or "callback" can be executed.

For exapmle:

var friends = ["Steve", "Mary", "Tom", "Rick"];
​
friends.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName);
});

## Functions and operators

> In `main.js` do the following:

1. Write a function named `modulus` that takes two arguments. The function should use the modulo operator to return the remainder between the first and second arguments.  e.g. `modulus(10, 3) // Should return 1`.
1. Write a function named `doMath`. This function takes three arguments.  The first two will contain integer values. The third argument will be a function reference. Write two more functions named `add` and `subtract`. Execute the `doMath` function to add two numbers together. Then execute the `doMath` function to subtract the two numbers.

## Arrays

> In the `main.js`, I started you off with a simple array.

1. Write a function named `sortedPlanets` that returns an array of the planet names sorted alphabetically.
1. Write a function named `reversedPlanets` that returns an array of planet names that are reversed (i.e. "htraE").
1. Write a function named `longPlanets` that returns an array containing only the planet names that are 7 characters long, or longer.

## IIFE

1. In the file named `IIFE.js`. Write an IIFE that defines a global variable named **FruitMaker**. It should contain a private array holding the following strings: "apples", "bananas", "cherries", "huckleberries".
1. The IIFE should expose in its public interface a getter named `getFruits()` that returns all fruits, and a setter named `addFruit()` that provides the ability to add a new fruit to the array.
1. In the file named `AugmentedIIFE.js`, augment **FruitMaker** with a function named `slices()` that accepts two arguments: the name of the fruit, and the number of slices to make. It should return an array containing the name of the fruit duplicated how ever many slices was requested.

  For example: `slices("apples", 2)` should return `["apples", "apples"]`

## XHR

1. Write a function named `getAnimals` that uses the jQuery `ajax` method to retrieve the `data/animals.json` file. When you execute the functions, it should just log *just the array* of animals to the console when the async is complete. Make sure you provide a prompt of "animals" when logging the array.
1. What are the four HTTP verbs that you can use in an XHR that correspond to the CRUD actions (create, read, update, delete)?
  **Student answer:**

1. Why did we use Promises when dealing with asynchronous XHR calls?
  **Student answer:**

  Promises, to my knowledge, causes asynchronous functions, calls that aren't synchronous to delay until other tasks are complete. making things run more smoothly.  Some tasks depend on others, some don't. 

1. Provide a simple example of the syntax for handling a Promise.
  **Student answer:**

  for example: 

return function () {
  var Promise = q.defer()

  $.ajax({
    url: 'MeFirst.com'
  })
  .done(function (data) {
    Promise.resolve(data)
  })
  .fail(function (xhr, status, error) {
    Promise.reject(error)
  })

  return Promise.promise
}


## Scope and this

What gets logged to the console when the following code executes? Explain why.

**Student answer: **

Probably the number "42"....because "666" is an evil number, and Steve is probably 42 years old.

```
var answer = "42";

function steve() {
  luke();
}

function luke() {
  var answer = "0";
  greg(answer);
}

function greg(answer) {
  var answer = "666";
  console.log( this.answer );
}

steve();
```


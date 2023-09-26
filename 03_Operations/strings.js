const name = "Harsh "
const count = 100
let string1 = " Hello"

let string2 = " World"

console.log(name + count + string1 + string2)

// This syntax of conacatenation using + for concating variables is not considered as good
// It is an old practice

// We can write string in three ways in JS using (" "), ('') i.e. single quote and double quote 

// But the third is very popular in modern JS 
// i.e. (``) Backticks
// Backticks provide the feature of string interpolation
//String interpolation is a great programming language feature that allows injecting variables,
// function calls, arithmetic expressions directly into a string.

console.log(`${string1} My name is ${name} and my roll is ${count}`)
// Since string is an object (not an array) and this array indexing is known as key value pairs
console.log(name[0])
// key => value || (0 => H)
// Another way of declaring string in JS using object and constructor

const collegeName = new String("KIIT")
// String has mant properties and provides various in built methods which comes under prototype
console.log(collegeName.__proto__) // run this in console
//The __proto__ getter function exposes the value of the internal [[Prototype]] of an object.
console.log(collegeName.toLowerCase())

const gameName = new String('hitesh-hc-com')
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)// will read reverse value
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim space from front and end both

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))// replace %20 by -

console.log(url.includes('sundar'))

console.log(gameName.split('-')); // split into array
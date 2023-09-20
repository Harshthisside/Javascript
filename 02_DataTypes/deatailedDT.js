// Based on how data is stored in the memory and how we can access it
// Data Type is divided into 2 types
//  Primitive: call by value
// A copy of data is passed
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
// Javascript is a dynamically typed language, we don't initialize variable with data type

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

// symbol is used to make a value unique
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(typeof anotherId);


const bigNumber = 3456543576654356754n
// n made the variable bigInt

console.log(typeof bigNumber)



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
// object inside curly braces and we can also store it in a variable
 let myobj = {
    name:"harsh",
    age: 20,
}
// Treating function as variable
// stored the function in a variable
const myFunction = function(){
    console.log("Hello world");
}
myFunction()
console.log(typeof myFunction)
//function has function type of data type but called as object function
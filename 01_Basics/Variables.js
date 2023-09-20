const accountId = 1246;
//We will use const keyword to declare a constant which will not change througout the code

//There are two ways we can declare a variable 

let yourName = "Harsh"
var yourAge = "20"

//We don't prefer to take var as a variable declaration keyword because of in issue of block scope and functional
//scope as the changed value in one scope will change the value of variable in another scope also

// What is scope ?
// Scope is simply a pair of curly braces {} inside which we write an individual piece of code or function

yourState = "Bihar"
//we can also reserve memory of a variable without declaring anything
// However this is not considered as good practice

let yourCity
//This variable is not defined yet
console.log(accountId)
console.table([accountId, yourName, yourAge, yourState]);
console.table([accountId, yourName, yourAge, yourState, yourCity]);

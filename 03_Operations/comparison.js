console.log(2>1)


console.log( "2" > 1)
//When JS saw comparison operator it convert string into number and compare

console.log("2"==2)
// These types of codes and comparisons give inconsistencies
console.log(null>0)
console.log("null"==0)
console.log(null>=0)

//> or >= are comparison operator so it convert null into number i.e. 0 and compare

// === triple equal to stand for strict check, it check value as well as data type 
console.log("2"===2)
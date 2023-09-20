let score = "33"

console.log(typeof score)
console.log(typeof (score))
// We can also write it as a method

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
console.log()

// If value is not a pure datatype

let x="331bc"
let convertInNumber = Number(x)
console.log(typeof x)
console.log(typeof convertInNumber)
console.log(convertInNumber)// It will give outpur NaN
// Means not a number

//  All to Number Conversion
// null => 0 in number conversion
//undefined => NaN
//true => 1
// string => NaN


// All to Boolean
// 1 => true
// "" => false
// "harsh" => true


//All to string
// 33 => string
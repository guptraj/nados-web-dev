// declaring string
let str = 'pepcoding'

// printing string
console.log(str)  

//length function
console.log(str.length)

// slice method
//slice(start(included),end(not included))
let slicestr= str.slice(3,6)
console.log(slicestr)

//substr method
// substr(start, length)
let substring = str.substr(3,4)
console.log(substring)

//Replacing string content

let sayHello = 'hello anushka'
console.log(sayHello)

//1. replace method

let sayBye= sayHello.replace('hello', 'hie')
console.log(sayBye)

// toUpperCase and toLowerCase
let text1 = 'Hello World'
console.log(text1)

//to convert to upper case
let text2 = text1.toUpperCase()
console.log(text2)

//to convert to lower case
let text3 = text1.toLowerCase()
console.log(text3)

//concatenation (concact method)
let firstString = 'Hello'
console.log(firstString)
let secondString = 'world'
console.log(secondString)
let final = firstString.concat(" ", secondString)
console.log(final)

//Trim method

let ans = '         hello world       '
console.log(ans)
let trimmed = ans.trim()
console.log(trimmed)

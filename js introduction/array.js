//declaring  an array
let cars2 = ['ferrai', 'bmw', 'audi', 'jaguar']

//another way
let car = [] // here car is an array, array is dynamic in js

//printing an array
console.log(cars2)

// print a particular element
console.log(cars2[3])

// update element
cars2[2] = 'bentley'

//add element after last index
console.log(cars2)
cars2[4] = 'mercedes'
console.log(cars2)

// skip items
cars2[7] = 'honda'
console.log(cars2)

//pop function
console.log(cars2.pop())
console.log(cars2)

// push function
cars2.push('royce rolls')
console.log(cars2)

//shift function
console.log(cars2.shift())
console.log(cars2)

//unshift function
cars2.unshift('aston martin')
console.log(cars2)

//length of an array
console.log(cars2.length)

    //multidimentional array
let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
]
    console.log(matrix[0][1]) // to print specific element
    console.log(matrix[0])    // to print specific row
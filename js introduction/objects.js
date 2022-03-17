// object declaration
let human = {}

let ironman = {
    name: 'Tony',
    lastname: 'stark',
    partner : ['captain', 'dr banner', 'hawkeye', 'natasha'],
    student: 'peter parker',
    died : 'no',
    address :{
        city : 'new york',
        country : 'usa'
    },
    sayhi : function fn()
    {
        console.log('hi')
    }
    
}

//calling object 
console.log(ironman)

// calling particular key of object
console.log(ironman.partner)    // dot notation
console.log(ironman['name'])   // bracket notation

// for loop     key is already in string and here we use bracket notation to print the element
for (let key in ironman)
{
    console.log('key :', key , 'Value : ', ironman[key])
}

// to add new key in the object 
ironman.movies = ['ironman 1', 'ironman 2', 'ironman 3']
console.log(ironman)

// to delete particular key in the object 
delete ironman.address
console.log(ironman)

// to modify key in object
ironman.died = 'yes'
console.log(ironman)

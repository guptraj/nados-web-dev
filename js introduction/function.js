
function multiplay(a,b)   // function is keyword
{
    console.log(a*b)
}

multiplay(2, 5)

function divide(a,b)
{
    console.log(a/b)
}

divide(10,2)

function subs(a,b)
{
    console.log(a-b)
}

subs(15, 10)



// function as first class citizens

let sayHi = function()
{
    console.log('hi')
}

sayHi()
// IIFE(immediately invoked function expression)

let add = (function (a, b)
{return a+b})(10, 20)

console.log(add)
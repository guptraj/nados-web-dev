const fs = require("fs");
// function firstname(first,cb,cb2)
// {
//     console.log(first)
//     cb('gupta')
//     cb('21')
// }

// function lastname(last)
// {
//     console.log(last)
// }

// function age(age)
// {
//     console.log(age)
// }

// firstname('rajat',lastname,age)
// // lastname('gupta')

console.log("before");

fs.readFile("f1.txt", cb1);
fs.readFile("f2.txt", cb2);

function cb1(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(" " + data);
  }
}
function cb2(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(" " + data);
  }
}

console.log("after");

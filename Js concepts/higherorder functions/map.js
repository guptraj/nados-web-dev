// map a high order function

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sqarr = arr.map(function square(v) {
  return v * v;
});
// console.log(arr);
// console.log(sqarr);

let nameArr = ["rajat", "mrinal", "khushi", "aryan"];

let nameArr2 = nameArr.map(function(n) {
  return n;
});
console.log(nameArr2);

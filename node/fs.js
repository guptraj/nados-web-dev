const fs = require("fs");
const path = require('path')

// // reading file
// let read = fs.readFileSync("f1.txt");
// console.log("data " + read);

// // // writing file
// fs.writeFileSync("f2.txt", "data of f2 text file");
// console.log("data return");

// // //creating a file and writing
// fs.writeFileSync("f3.txt", "new file created and data entered");

// // // append a file
// fs.appendFileSync('f2.txt',' this is new data')

// // //deleting a file

// fs.unlinkSync('f2.txt')
// console.log('file deleted')

// //creating directory
// fs.mkdirSync('mydirectory')
// console.log('directory created')

// //deleting directory
// fs.rmdirSync('mydirectory')
// console.log('directory deleted')

// //to check whether a directory exist or not
// let exist = fs.existsSync('mydirectory')
// console.log(exist)

// // statistics of directory
// let stats= fs.lstatSync('mydirectory')
// console.log(stats)

// // to check 
// console.log('isFile?', stats.isFile())
// console.log('isDirectory?', stats.isDirectory())

// // to read content of directory
// let folderpath = 'H:\\My Drive\\web dev\\node\\mydirectory';
// let data = fs.readdirSync(folderpath)
// console.log('content is ' + data)

//copying

let filepath = 'H:\\My Drive\\web dev\\node\\mydirectory\\f1.text'

let direcpath = 'H:\\My Drive\\web dev\\node\\mydirectory2'

let filename = path.basename(filepath)
console.log(filename)

let newFilePath = path.join(direcpath, filename)
console.log(newFilePath)

fs.copyFileSync(filepath,newFilePath)
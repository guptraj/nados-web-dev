const cp = require('child_process')

console.log('opening calculator')
cp.execSync('calc')

console.log('opening vs code ')
cp.execSync('code')

console.log('openinng chrome')
cp.execSync('start chrome https://github.com/mrinal1224/FJP-3-Dev/blob/master/2_HTML_CSS/28%20Dec%202021/final/index.html')

let out = cp.execSync('node test.js')
console.log("output"  + out)
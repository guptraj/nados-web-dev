const help = require('./commands/help')
const organize = require('./commands/organise')
const tree = require('./commands/tree')


let input = process.argv.slice(2)
let command = input[0]

switch (command) {
    
    case 'tree':
        tree.treeKey(input[1])
        break;
    
    case 'organize':
        organize.organizeKey(input[1])
        break;
    
    case 'help':
        help.helpKey()
        break;

    default:
        console.log("enter valid instruction")
}
// node fo.js organize 'H:\My Drive\web dev\file manager\test'

// node fo.js tree 'H:\My Drive\web dev\file manager\test'
let input = process.argv.slice(2);

// console.log(input)
// console.log(input)
let command = input[0]

// in js input is taken in array form, node will be treated as data of 0th index and file_name will be treated as 1st index data 
switch(command)
{
    case 'tree':
        console.log('tree implemented')
        break;
    case 'organize':
        console.log('organize implemented')
        break;
    case 'help':
        helpfn()
        break;
    default:
        console.log('enter valid parameter')
        break;
}

function helpfn()
{
    console.log(`List of the commands
            1) Tree command - node fo.js tree <directiry_name>
            2) Organise command - node fo.js organise <directory_name>
            3) Help command - node fo.js help`)
                    
}
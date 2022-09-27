const path = require('path')
const fs = require('fs')
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
    image: ["jpg","png"]
  };

let input = process.argv.slice(2)
let command = input[0]

switch (command) {
    case 'tree':
        console.log('Tree is planted')
        break;
    case 'organize':
        organise(input[1])
        break;
    case 'help':
        help()
        break;

    default:
        console.log("enter valid instruction")
}

function help() {
    console.log(`enter following instructions only
            1) tree command - node fo.js tree <directory_path>
            2) organize command - node fo.js organize <directory_path>
            3) help command - node fo.js help <directory_path>`)
}

function organise(src) {
    if (src == undefined) {
        console.log('Enter valid path')
    }
    else {
        if (fs.existsSync(src)) {
            let newPath = path.join(src, "Organised_files")
            if (fs.existsSync(newPath) == false) {
                fs.mkdirSync(newPath)

            }
            else {
                console.log('Already existed')
            }
            organiseHelper(src, newPath)
        }
        else {
            console.log('Enter valid path')
        }
    }
}

function organiseHelper(src, dest) {
    let childName = fs.readdirSync(src)
    // console.log(childName)
    for (let i = 0; i < childName.length; i++) {
        let childAddress = path.join(src,childName[i])
        // console.log(childAddress)
        if(fs.lstatSync(childAddress).isFile())
        {
            let category = getCategory(childName[i])
            // console.log(childAddress + " belongs to " + category)
            sendFiles(childAddress,dest,category)
        }
    }
}

function getCategory(name)
{
    let extension = path.extname(name)
    extension = extension.slice(1)
    // console.log(extension)

    for(let type in types)
    {
        let arr = types[type]
        for(let i=0;i<arr.length;i++)
        {
            if(extension == arr[i] )
            {
                return type;
            }
        }

    }
    return 'others'
}

function sendFiles(src,dest,category)
{
    let fileDirPath = path.join(dest,category)
    if(fs.existsSync(fileDirPath)==false)
    {
        fs.mkdirSync(fileDirPath)
    }
    let basename = path.basename(src)
    let newFilePath = path.join(fileDirPath,basename)
    // console.log(newFilePath)
    fs.copyFileSync(src,newFilePath)
    fs.unlinkSync(src)

  
}

// node fo.js organize 'D:\file manager\test'
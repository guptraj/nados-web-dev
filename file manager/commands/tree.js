const path = require("path");
const fs = require("fs");

function tree(dirpath) {
  if (dirpath == undefined) {
    console.log("enter valid path ");
  } else {
    if (fs.existsSync(dirpath)) {
      treeHelper(dirpath, " ");
    } else {
      console.log("enter valid path ");
    }
  }
}

function treeHelper(dirpath, indent) {
  let fileName = path.basename(dirpath);

  if (fs.lstatSync(dirpath).isFile()) {
    console.log(indent + "├──" + fileName);
  } else {
    console.log(indent + "└──" + fileName);

    let children = fs.readdirSync(dirpath);

    for (let i = 0; i < children.length; i++) {
      let childrenPath = path.join(dirpath, children[i]);
      treeHelper(childrenPath, indent + "\t");
    }
  }
}

module.exports = {
    treeKey : tree
}
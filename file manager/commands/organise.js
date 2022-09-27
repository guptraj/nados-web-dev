const path = require("path");
const fs = require("fs");

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
  image: ["jpg", "png"],
};

function organise(src) {
  if (src == undefined) {
    console.log("Enter valid path");
  }
  else {
    if (fs.existsSync(src)) {
      let newPath = path.join(src, "Organised_files");
      if (fs.existsSync(newPath) == false) {
        fs.mkdirSync(newPath);
      }
      else {
        console.log("Already existed");
        }
        
      organiseHelper(src, newPath);
    }
    else {
      console.log("Enter valid path");
    }
  }
}

function organiseHelper(src, dest) {
  let childName = fs.readdirSync(src);

  for (let i = 0; i < childName.length; i++) {
    let childAddress = path.join(src, childName[i]);

    if (fs.lstatSync(childAddress).isFile()) {
      let category = getCategory(childName[i]);

      sendFiles(childAddress, dest, category);
    }
  }
}

function getCategory(name) {
  let extension = path.extname(name);
  extension = extension.slice(1);

  for (let type in types) {
    let arr = types[type];
    for (let i = 0; i < arr.length; i++) {
      if (extension == arr[i]) {
        return type;
      }
    }
  }
  return "others";
}

function sendFiles(src, dest, category) {
  let fileDirPath = path.join(dest, category);
  if (fs.existsSync(fileDirPath) == false) {
    fs.mkdirSync(fileDirPath);
  }
  let basename = path.basename(src);
  let newFilePath = path.join(fileDirPath, basename);
  fs.copyFileSync(src, newFilePath);
  fs.unlinkSync(src);
}

module.exports = {
  organizeKey: organise,
};

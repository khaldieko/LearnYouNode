import fs from "fs";
import path from "path";
function getFiles(directory, extension) {
  var dir = fs.readdir(directory, (err, files) => {
    var result = [];
    if (err) console.log(err);
    else {
      files.forEach((file) => {
        var ext = path.extname(file);

        if (ext === extension) result.push(file);
      });

      console.log(result);
    }
  });
  
}

console.log(getFiles("./text folders", ".txt"));
//To see files with .js change the second parameter in the console .log on line 20 to .js

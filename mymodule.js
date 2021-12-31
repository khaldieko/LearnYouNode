import fs from "fs";
import path from "path";
function getFiles(directory, extension) {
  var dir = fs.readdir(directory, (err, files) => {
    var result = [];
    if (typeof extension !== "string" || typeof directory !== "string") {
      const error = new Error("type in a valid extension or a valid directory");
      error.message = "type in a valid extension or a valid directory";
      throw error;
    }

    if (err) {
      console.log("im here");
      return err.message;
    } else {
      files.forEach((file) => {
        var ext = path.extname(file);

        if (ext === extension) result.push(file);
      });
      if (result.length === 0)
        console.log("no files with the extension " + extension);
      else console.log(result);
    }
  });
}

export default getFiles
//To see files with .js change the second parameter in the console .log on line 20 to .js

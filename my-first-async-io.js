import fs from "fs";
async function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("./hello-world.js", "utf-8", (err, data) => {
      if (err) {console.log(err)
        reject(err)}
      else {console.log(data)
        resolve(data)}
    });
  });
}
readFile();

import fs from "fs"

let good = fs.readFileSync('./hello-world.js')
console.log(good.toString());
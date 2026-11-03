const fs = require("fs");
const message = fs.readFileSync("message.txt", "utf-8");
console.log(message);

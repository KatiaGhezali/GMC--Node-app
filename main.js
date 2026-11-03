const generateReport = require("./reportGenerator");

const reportPass = generateReport("John", [15, 12, 14, 16, 13]);
const reportFail = generateReport("John", [5, 10, 4, 6, 11]);

console.log(reportPass);
console.log(reportFail);

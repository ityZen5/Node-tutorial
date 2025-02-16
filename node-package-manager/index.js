const lodash = require("lodash");

const names = ["bharath", "sangam", "indu", "anupama"];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
const firstModule = require('./first-module');
console.log(firstModule.subtract(100,10));

try {
    console.log("Trying to Divide by 0")
    let result = firstModule.divide(10,100);
    console.log(result);
} catch (error) {
    console.log("Caught an error", error.message);
}
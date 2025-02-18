const fs = require('fs')

function person(name, callBackFn) {
    console.log(`Hello ${name}`);
    callBackFn();
}

function address() {
    console.log('India');
}

//callback example
person('Bharath', address);

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if(err){
        console.log('Error reading file', err)
        return
    }
    console.log(data)
})
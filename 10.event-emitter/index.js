const EventEmitter = require('events');

const myFirstEmitter = new EventEmitter();

//register a listener
myFirstEmitter.on('greet', (name) =>{
    console.log(`Hellow ${name}`)
})

myFirstEmitter.emit('greet', "Bharath Raghavan")
const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data')

if(!fs.existsSync(dataFolder)){ //makes a data folder if it does not exist
    fs.mkdirSync(dataFolder);
    console.log("data folder created")
}

//creating a file inside data folder
const filePath = path.join(dataFolder, 'example.txt');


//synchronus way of creating a file
fs.writeFileSync(filePath, 'Hello from node js')
console.log('file created successfully')

//Reading a content from file
const readContentFromFile = fs.readFileSync(filePath, "utf8")
console.log("File content: " , readContentFromFile);

//adding new content into the file
fs.appendFileSync(filePath, "\nThis is the new line added");
console.log("new file added")


//async way of creating a file
const asyncFilePath = path.join(dataFolder, 'async-example.txt');
fs.writeFile(asyncFilePath, "Hello Async node.js ", (err) => {
    if(err) throw err;
    console.log('Async file is created successfully')
})

fs.readFile(asyncFilePath, "utf8", (err, data) =>{
    if(err) throw err;
    console.log("Async file content: ", data);
}) 

fs.appendFile(asyncFilePath, "\nNew line added in async", (err) => {
    if(err) throw err;
    console.log("New line added to async file")

    fs.readFile(asyncFilePath, 'utf8', (err, upadtedData) => {
        if(err) throw err;
        console.log("Updated file content: ", upadtedData)
    })
})


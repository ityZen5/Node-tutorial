const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error reading file', err)
        return
    }

    const modifiedFileData = data.toUpperCase();
    fs.writeFile('output.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error writing  file', err)
            return
        }
        console.log('data written to the new file')

        fs.readFile('output.txt', 'utf-8', (err, data) => {
            if(err){
                console.error("Error reading file", err)
                return
            }
            console.log(data);
        })
    })
})
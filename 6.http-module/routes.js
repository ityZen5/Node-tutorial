const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("Home page")
    }else if(url === '/projects'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("projects")
    }else{
        res.writeHead(240, {'content-type': 'text/plain'});
        res.end("Page Not Found")
    }
})

const port = 3000
server.listen(port, () =>{
    console.log(`server is listening to port ${port}`);
})
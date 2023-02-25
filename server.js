var http = require('http');

var server = http.createServer((req,res) => {
    const url = req.url;
    if(url ==='/home'){
        res.end("welcome home")
    }
    if(url ==='/about'){
        res.end("welcome to about page")
        
    }
    if(url ==='/node'){
        res.end("welcome to my node project")
    }
})
server.listen(4000)
var http = require('http');

var server = http.createServer((req,res) => {
    res.write('ashok kumar');
    res.end()
})
server.listen(4000)
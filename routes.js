const fs = require('fs')

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {

        fs.readFileSync('message.txt',{ encoding : 'utf-8' },(err,data) => {
            if(err){
                console.log(err)
            }
            console.log(data)
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write(`<body> ${data} </body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
            
        })
      
      }
      
      else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunkData) => {
            console.log(chunkData)
            body.push(chunkData);
      
        });
        return req.on('end',() => {
            const bodyParser = Buffer.concat(body).toString();
            const message = bodyParser.split("=")[1]
            fs.writeFileSync('message.txt', message,(err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
      
        })
      
        
      
      }
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>My First Page</title><head>');
      res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
      res.write('</html>');
      res.end();
      
}


module.exports = requestHandler;

//module.exports.request = requestHandler

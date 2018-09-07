var fs = require('fs'); 
var https = require('https'); 
var options = { 
    key: fs.readFileSync('server-key.pem'), 
    cert: fs.readFileSync('server-crt.pem'), 
    ca: fs.readFileSync('ca-crt.pem'), 
    requestCert: true, 
    rejectUnauthorized: false
}; 
https.createServer(options, function (req, res) { 
    console.log(new Date()+' '+ 
        req.connection.remoteAddress+' '+ 
        req.socket.getPeerCertificate().subject.CN+' '+ 
        req.method+' '+req.url); 
    res.writeHead(200); 
    res.end(JSON.stringify({ "version": "1.0", "response": { "outputSpeech": { "type": "PlainText", "text": "hello hello hello yo yo yo world!"} }}));
    //res.end("hello world\n"); 
}).listen(8000);

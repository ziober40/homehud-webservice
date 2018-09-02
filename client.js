var fs = require('fs'); 
var https = require('https'); 
var options = { 
    hostname: '192.168.1.183', 
    port: 8000, 
    path: '/', 
    method: 'GET', 
    key: fs.readFileSync('client2-key.pem'), 
    cert: fs.readFileSync('client2-crt.pem'), 
    ca: fs.readFileSync('ca-crt.pem') }; 
var req = https.request(options, function(res) { 
    res.on('data', function(data) { 
        process.stdout.write(data); 
    }); 
}); 
req.end(); 
req.on('error', function(e) { 
    console.error(e); 
});
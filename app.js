var http = require('http')
var https=require('https')
var express = require('express')
var serveIndex= require('serve-index')
const fs = require('fs')

var app = express() 

app.use(serveIndex('public'))
app.use(express.static('public'))


var http_server = http.createServer(app)
http_server.listen(80,'0.0.0.0');


var options = {

    key:fs.readFileSync('./cret02/privatekey.pem'),
    cret:fs.readFileSync('./cret02/certificate.pem')
}

var https_server = https.createServer(options,app)

https_server.listen(443,'0.0.0.0')
console.log('服务已经启动');

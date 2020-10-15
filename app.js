var http = require('http')
var https=require('https')
var express = require('express')
var serveIndex= require('serve-index')
const fs = require('fs')

var app = express() 

app.use(serveIndex('public'))
app.use(express.static('public'))


var http_server = http.createServer(app)
http_server.listen(5000,'0.0.0.0');


var options = {
    // key:fs.readFileSync('./cret/openssl_pri_pkcs8.key'),
    // cret:fs.readFileSync('./cret/openssl_pub.key')

    key:fs.readFileSync('./cret/server-key.key'),
    cret:fs.readFileSync('./cret/server.pem')
}

var https_server = https.createServer(options,app)

https_server.listen(443,'0.0.0.0')
console.log('服务已经启动');
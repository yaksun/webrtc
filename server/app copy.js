var https= require('https')
var serveIndex = require('serve-index')
var express = require('express')
var fs = require('fs')

var options = {
    key:fs.readFileSync('../cret/openssl_pri_pkcs8.key'),
    cret:fs.readFileSync('../cret/openssl_pub.key')
}

var app = express() 

app.use(serveIndex('./public'))
app.use(express.static('./public'))

var https_server = https.createServer(options,app)

https_server.listen(9000,'127.0.0.1')
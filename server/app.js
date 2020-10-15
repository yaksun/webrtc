var https= require('https')
var express = require('express')
var fs = require('fs')

var options = {
    key:fs.readFileSync('../cret/openssl_pri_pkcs8.key'),
    cret:fs.readFileSync('../cret/openssl_pub.key')
}

var app = express() 

app.use(express.static('./public'))

var https_server = https.createServer(options,app)

https_server.listen(443,'0.0.0.0')
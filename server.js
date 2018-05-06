const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const querystring = require('querystring')
const request = require('request')
const squareConnect = require('square-connect')
const cors = require('cors')

app = express();
app.use(serveStatic(__dirname + "/dist"));
let catalogData = {}
let categoryList = {}

app.get('/products', (req, res) => res.send(catalogData))
app.get('/categoryList', (req, res) => res.send(categoryList))


request('https://connect.squareup.com/v2/catalog/list',
  {'auth': {
    'bearer': process.env.SQUARE_UP_ACCESS_TOKEN
  }}, function(error, response, body){
    catalogData = JSON.parse(body)
  })

  app.get('/products', (req, res) => res.send(catalogData))

request('https://connect.squareup.com/v2/catalog/list',
  {'auth': {
    'bearer': process.env.SQUARE_UP_ACCESS_TOKEN
  }}, function(error, response, body){
    catalogData = JSON.parse(body)
    categoryList = catalogData.objects.filter(object => object.type == "CATEGORY")
  })



var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);

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

app.get('/products', (req, res) => res.send(catalogData))

function apiCall(access_token) {
  var defaultClient = squareConnect.ApiClient.instance;

  // Configure OAuth2 access token for authorization: oauth2
  var oauth2 = defaultClient.authentications['oauth2'];
  oauth2.accessToken = access_token;
  var api = new squareConnect.LocationsApi();
  return api.listLocations().then(data => data)
}

request('https://connect.squareup.com/v2/catalog/list',
  {'auth': {
    'bearer': process.env.SQUARE_UP_ACCESS_TOKEN
  }}, function(error, response, body){
    catalogData = JSON.parse(body)
  })



var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);

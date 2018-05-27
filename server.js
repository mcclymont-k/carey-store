const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const request = require('request')
const SquareConnect = require('square-connect')
const cors = require('cors')

app = express();
app.use(serveStatic(__dirname + "/dist"))

const defaultClient = SquareConnect.ApiClient.instance;
let oauth2 = defaultClient.authentications['oauth2']
oauth2.accessToken = process.env.SQUARE_UP_ACCESS_TOKEN
console.log(process.env.SQUARE_UP_ACCESS_TOKEN)

let locationsId = 1
let itemList = {}
let categoryList = {}
let fakeData = {
  idempotency_key: '1w2ffgt5L',
  ask_for_shipping_address: true,
  merchant_support_email: 'mcclymont.kieran@gmail.com',
  order: {
    reference_id: '1',
    line_items: [
      {
        name: 'item1',
        quantity: '1',
        base_price_money: {
          amount: 101,
          currency: 'USD'
        }
      }
    ]
  }
}

app.get('/items', (req, res) => res.send(itemList))
app.get('/categoryList', (req, res) => res.send(categoryList))

request('https://connect.squareup.com/v2/catalog/list',
  {'auth': {
    'bearer': process.env.SQUARE_UP_ACCESS_TOKEN
  }},
    (error, response, body) => {
      catalogData = JSON.parse(body)
      itemList = catalogData.objects.filter(object => object.type == "ITEM")
  })

request('https://connect.squareup.com/v2/catalog/list',
  {'auth': {
    'bearer': process.env.SQUARE_UP_ACCESS_TOKEN
  }},
    (error, response, body) => {
      catalogData = JSON.parse(body)
      categoryList = catalogData.objects.filter(object => object.type == "CATEGORY")
  })

let locationsApiRequest = new SquareConnect.LocationsApi();
locationsApiRequest.listLocations().then(function(data) {
  locationsId = data.locations[0].id;
}, function(error) {
  console.error(error);
});



app.get('/checkout', (req, res) => {
  let checkoutRequest = new SquareConnect.CreateCheckoutRequest()
  checkoutRequest.idempotency_key = fakeData.idempotency_key
  checkoutRequest.order = fakeData.order
  let apiInstance = new SquareConnect.CheckoutApi()
  apiInstance.createCheckout(locationsId, checkoutRequest)
  .then(function(data) {
    let URL = data.checkout.checkout_page_url
    res.redirect(URL)
  }, function(error) {
    console.error(error);
  });
})

var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);

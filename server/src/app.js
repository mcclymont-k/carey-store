const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const SquareConnect = require('square-connect');
const defaultClient = SquareConnect.ApiClient.instance;

oauth2 = defaultClient.authentications.oauth2;
oauth2.accessToken = 'sq0atp-vL4Vqurp1uFH-Kbw9UHLbQ'

const locationsApi = new SquareConnect.LocationsApi();
// Make an API call to the listLocations endpoint
locationsApi.listLocations()
  .then((response) => {
    console.log('API called successfully, returned data: ' +
    response);
    console.log(response)
  });



mongoose.connect('mongodb://guest:guest@ds155577.mlab.com:55577/creativity-by-design')
let db = mongoose.connection

// Check for errors
db.on('err', (err) => console.log(err))
// Log once connected
db.once('open', () => console.log("connected to DB ..."))

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

let product = require('./models/careyProducts')

app.get('/products', (req, res) => {
  product.find({}, (err, data) => {
    res.send(data)
  })
})

app.listen(process.env.PORT || 8081)

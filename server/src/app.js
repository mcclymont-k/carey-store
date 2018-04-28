const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')


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
    console.log(data)
  })
})

app.listen(process.env.PORT || 8081)

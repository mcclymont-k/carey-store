const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

mongoose.connect('mongodb://localhost/careyStore')

let db = mongoose.connection

db.once('open', () => console.log("connected to mongodb"))

const app = express()
app.use(bodyParser.json())
app.use(cors())

let products = require('./models/careyProducts')

app.get('/products', (req, res) => {
  products.find({}, (err, data) => {
    res.send(data)
    console.log('hello')
  })
})

app.listen(process.env.PORT || 8081)

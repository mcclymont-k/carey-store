const mongoose = require('mongoose')

let careyProducts = mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  image: String
})

 let products = module.exports = mongoose.model('product', careyProducts)

var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds133964.mlab.com:33964/shopping-cart');

var products = [
  new Product({
    imagePath: 'http://media.moddb.com/images/articles/1/174/173130/auto/maxresdefault.jpg',
    title: 'Age of Expires',
    description: 'Real Time Strategy Game from Microsoft',
    price: 11.99
  }),
  new Product({
    imagePath: 'http://media.moddb.com/images/articles/1/174/173130/auto/maxresdefault.jpg',
    title: 'Age of Expires',
    description: 'Real Time Strategy Game from Microsoft',
    price: 11.99
  }),
  new Product({
    imagePath: 'http://media.moddb.com/images/articles/1/174/173130/auto/maxresdefault.jpg',
    title: 'Age of Expires',
    description: 'Real Time Strategy Game from Microsoft',
    price: 11.99
  }),
  new Product({
    imagePath: 'http://media.moddb.com/images/articles/1/174/173130/auto/maxresdefault.jpg',
    title: 'Age of Expires',
    description: 'Real Time Strategy Game from Microsoft',
    price: 11.99
  }),
  new Product({
    imagePath: 'http://media.moddb.com/images/articles/1/174/173130/auto/maxresdefault.jpg',
    title: 'Age of Expires',
    description: 'Real Time Strategy Game from Microsoft',
    price: 11.99
  }),
  new Product({
    imagePath: 'http://media.moddb.com/images/articles/1/174/173130/auto/maxresdefault.jpg',
    title: 'Age of Expires',
    description: 'Real Time Strategy Game from Microsoft',
    price: 11.99
  }),
  new Product({
    imagePath: 'http://media.moddb.com/images/articles/1/174/173130/auto/maxresdefault.jpg',
    title: 'Age of Expires',
    description: 'Real Time Strategy Game from Microsoft',
    price: 11.99
  }),
  new Product({
    imagePath: 'http://media.moddb.com/images/articles/1/174/173130/auto/maxresdefault.jpg',
    title: 'Age of Expires',
    description: 'Real Time Strategy Game from Microsoft',
    price: 11.99
  }),
  new Product({
    imagePath: 'http://media.moddb.com/images/articles/1/174/173130/auto/maxresdefault.jpg',
    title: 'Age of Expires',
    description: 'Real Time Strategy Game from Microsoft',
    price: 11.99
  }),
  new Product({
    imagePath: 'http://media.moddb.com/images/articles/1/174/173130/auto/maxresdefault.jpg',
    title: 'Age of Expires',
    description: 'Real Time Strategy Game from Microsoft',
    price: 11.99
  })
];

var done = 0
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}

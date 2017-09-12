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
    imagePath: 'https://redmondmag.com/~/media/ECG/redmondmag/Images/introimages2014/152101REDSchwartzWin10.jpg',
    title: 'Microsoft Windows 10',
    description: 'An Operating System',
    price: 199.99
  }),
  new Product({
    imagePath: 'http://3rmvs8um3vr2qtme426ex2k1.wpengine.netdna-cdn.com/wp-content/uploads/2016/10/From-History-of-Photoshop.png',
    title: 'PhotoShop',
    description: 'Image Editing Software. Sold on annual subscription liscence. Cost is per annum.',
    price: 249
  }),
  new Product({
    imagePath: 'https://blogsimages.adobe.com/creativecloud/files/2016/09/devworkspace.png',
    title: 'Adobe DreamWeaver',
    description: 'A great IDE for web developers. Cost is per annum.',
    price: 99
  }),
  new Product({
    imagePath: 'https://www.brianchristner.io/content/images/2015/06/ubuntu-penguin.jpg',
    title: 'Ubuntu',
    description: 'Open-source Operating System. For all users.',
    price: 0.00
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

const App = require('./app'),
    Mongoose = require('mongoose');
Mongoose.Promise = global.Promise;

Mongoose.connect('mongodb://localhost/songshare', () => {
  console.log('Mongodb server is running on port 4500');
});


App.listen('4500', () => {
  console.log('Node server is running on port 4500');
});
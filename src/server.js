process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express')
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://'+process.env.MONGO_HOST+':'+process.env.MONGO_PORT+'/'+process.env.MONGO_COLLECTION);
//console.log(db)
var db = mongoose.connection;
console.log('dddddddddddddddddd',db)


db.on('error', function() {
    console.log('database connection error');
});
app.listen(8000);
console.log('running at 8000');


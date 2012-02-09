var express = require('express')
  , Resource = require('express-resource')
  , app = express.createServer();
  
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.bodyParser());
app.use(express.methodOverride());

app.resource('packers', require('./packers'));
app.resource('io', require('./io'));

app.listen(8004);
console.log('Listening at %j', app.address());

var express = require('express')
  , Resource = require('express-resource')
  , app = express.createServer();
  
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.bodyParser());
app.use(express.methodOverride());

app.configure('development',
function() {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

app.configure('production',
function() {
    app.use(express.errorHandler());
});

app.resource('packers', require('./packers'));
app.resource('ios', require('./ios'));

express.bodyParser.parse['application/collection+json'] = JSON.parse;

app.listen(8004);
console.log('Listening at %j', app.address());

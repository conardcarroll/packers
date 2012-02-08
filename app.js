var express = require('express')
  , Resource = require('express-resource')
  , app = express.createServer();

app.resource('packers', require('./packers'));

app.listen(8004);
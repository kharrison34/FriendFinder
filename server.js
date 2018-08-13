//requires
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;


//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//my routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app, path);


app.listen(PORT, ()=> {
    console.log(`flim flam shabam: ${PORT}`);
});
const express = require('express');
const port = 8000;
const app = express();
const path = require('path');

const expressLayouts = require('express-ejs-layouts');
const csv = require('csv-parser');
const db = require("./config/mongoose");
const bodyParser = require('body-parser');

// setting layouts
app.use(expressLayouts);

// middleware
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

//for static files 
app.use(express.static('./assets'));  



//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// routes
app.use('/', require('./routes'));

app.listen(port, function(err) {
    if(err) {
        console.log('Error', err);
        return;
    }
    console.log('Server is up and running on port: ', port);

});
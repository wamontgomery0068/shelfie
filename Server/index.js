const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()
// const products_controller = require('./products_controller');

const app = express();
app.use( bodyParser.json() );

massive( process.env.CONNECTION_STRING ).then(db => {
    app.set('db', db)
}).catch( err => console.log(err) );

// ***** RESTful Request with Associated Endpoints below *****
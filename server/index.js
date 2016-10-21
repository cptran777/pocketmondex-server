'use strict'

/******************* INIT DEPENDENCIES *********************/

let express = require('express');
let bodyparser = require('body-parser');
let path = require('path');

let app = express();

/***************** INIT CUSTOM MODULES *********************/

let pseudoDb = require('../db/store');
let router = require('./routes');

/******************* INIT MIDDLEWARE ***********************/

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyparser.json());

/********************* INIT ROUTES ************f*************/

router.main(app);
router.api(app);

/********************* INIT SERVER *************************/

let port = process.env.PORT || 8000;

let server = app.listen(port, () => {
	console.log('Listening on port ', port);
});
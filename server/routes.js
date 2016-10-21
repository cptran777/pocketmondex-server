'use strict';

/******************* INIT DEPENDENCIES *********************/

let path = require('path');
let request = require('request');

/********************** MAIN ROUTES ************************/

const routesMain = (app) => {

	const mainMessage = (req, res) => {
		res.send({ message: 'This is an API service for Pocketmon Dex' });
	};

	app.get('/', mainMessage);

	app.get('/api', mainMessage);

};

/*********************** API ROUTES ************************/

const routesAPI = (app) => {

	app.get('/api/pokemons', (req, res) => {
		res.send({
			data: [{
				name: 'Bulbasaur',
				id: 1
			},
			{
				name: 'Ivysaur',
				id: 2
			},
			{
				name: 'Venasaur',
				id: 3
			}]
		})
	});

	app.get('/api/pokemons/:pokeId', (req, res) => {
		res.send({
			message: 'API success',
			params: req.params
		})
	});

};

module.exports = {
	main: routesMain,
	api: routesAPI
}

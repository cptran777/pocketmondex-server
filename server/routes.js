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
				type: 'pokemons',
				id: 1,
				attributes: {
					name: 'Bulbasaur',
					typeA: 'grass',
					typeB: 'poison'
				},
			},
			{
				type: 'pokemons',
				id: 2,
				attributes: {
					name: 'Ivysaur',
					typeA: 'grass',
					typeB: 'poison'
				}
			},
			{
				type: 'pokemons',
				id: 3,
				attributes: {
					name: 'Venasaur',
					typeA: 'grass',
					typeB: 'poison'
				}
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

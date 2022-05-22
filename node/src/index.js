import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {
	getRoutes,
	getStopLocations,
	getStopTimeLocation,
	getStopTimesByStops,
} from './lib/gtfsQuery.js';

export const env = dotenv.config().parsed;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send('Welcome to my silly transit app');
});

app.get('/routes', (req, res) => {
	res.send('Welcome to routes');
});

app.get('/getRoutes', async (req, res) => {
	const queryResponse = await getRoutes();
	res.send(queryResponse);
});

app.get('/getStops', async (req, res) => {
	const stopList = req.query.stops ?? null;
	const queryResponse = await getStopLocations(stopList);
	res.send(queryResponse);
});

app.get('/getStopTimes', async (req, res) => {
	const stopList = req.query.stops ?? null;
	const queryResponse = await getStopTimesByStops(stopList);
	res.send(queryResponse);
});

app.get('/getStopTimeLocation', async (req, res) => {
	const stopList = req.query.stops ?? null;
	const queryResponse = await getStopTimeLocation(stopList);
	res.send(queryResponse);
});

app.listen(env.NODE_PORT, async () => {
	console.log(`Example app listening on port ${env.NODE_PORT}`);
});

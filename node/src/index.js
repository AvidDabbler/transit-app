import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { querySqlite } from './lib/gtfsQuery.js';

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
	const allRoutes = await querySqlite('select * from routes');
	res.send(JSON.stringify(allRoutes));
});

app.listen(env.NODE_PORT, async () => {
	console.log(`Example app listening on port ${env.NODE_PORT}`);
});

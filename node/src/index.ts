
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

export const env = dotenv.config().parsed;
const app = express();
const port = env?.PORT;

app.use(cors());







app.get('/', (req, res) => {
	res.send('Welcome to my silly transit app');
});

app.get('/routes', (req, res) => {
	res.send('Welcome to routes');
});

app.listen(4000, async () => {
	console.log(`Example app listening on port ${port}`);
});

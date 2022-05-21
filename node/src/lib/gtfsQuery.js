import sqlite3 from 'sqlite3';
import { env } from '../index.js';

const querySqlite = async (query) => {
	const db = new sqlite3.Database(env.DB_PATH);
	return new Promise((res, rej) => {
		db.serialize(() => {
			db.all(query, (err, rows) => {
				if (err) rej(err);
				res(rows);
			});
		});
	});
};

export const getStops = async (stops) => {
	let query = 'select * from stops';
	if (stops) {
		query = query + ` where stop_id in ('${stops.join("','")}')`; // eslint-disable-line
	}
	return await querySqlite(query);
};

import sqlite3 from 'sqlite3';
import { env } from '../index.js';

export const querySqlite = async (query) => {
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

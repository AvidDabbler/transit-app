import sqlite3 from 'sqlite3';
import { env } from '../index';

export const querySqlite = async (query: string) => {
	const db = new sqlite3.Database(env.db);
	return new Promise((res, rej) => {
		db.serialize(() => {
			db.all(query, (err, rows) => {
				if (err) rej(err);
				res(rows);
			});
		});
	});
};

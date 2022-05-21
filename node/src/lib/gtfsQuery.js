import sqlite3 from 'sqlite3';
import { env } from '../index.js';
import { getStoptimes, openDb, getStops as gs } from 'gtfs';
import { updateStopTimes } from './stopTimes.js';

const config = {
	sqlitePath: 'gtfs.db',
	agencies: [
		{
			path: 'gtfs.zip',
		},
	],
	exportPath: '../gtfs/export',
};

const querySqlite = async (query) => {
	const db = new sqlite3.Database(env.DB_PATH);
	return new Promise((res, rej) => {
		db.serialize(() => {
			db.all(query, (err, rows) => {
				if (err) rej(err);
				res(JSON.stringify(rows));
			});
		});
	});
};

const getSelection = (table, idField, list) => {
	let query = `select * from ${table}`;
	if (list) {
		query = query + ` where ${idField} in ('${list.join("','")}')`; // eslint-disable-line
	}
	return query;
};

export const getStops = async (stops) => {
	let query = getSelection('stops', 'stop_id', stops);
	return await querySqlite(query);
};

export const getRoutes = async (stops) => {
	let query = getSelection('routes', 'route_id', stops);
	return await querySqlite(query);
};

export const getStopTimesByStops = async (stops) => {
	await openDb(config);
	const stopsObj = stops ? { stop_id: stops } : {};
	const stopTimes = await getStoptimes(stopsObj).catch((e) => console.log(e));
	return updateStopTimes(stopTimes);
};

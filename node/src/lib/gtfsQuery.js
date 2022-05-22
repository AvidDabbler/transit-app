import sqlite3 from 'sqlite3';
import { env } from '../index.js';
import {
	getStops,
	getStoptimes,
	getRoutes as getRoutesQuery,
	openDb,
	getTrips as getTripsQuery,
} from 'gtfs';
import { joinTimesAndLocations, updateStopTimes } from './stopTimes.js';

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

export const getRoutes = async () => {
	await openDb(config);
	return await getRoutesQuery();
};

export const getTrips = async () => {
	await openDb(config);
	const trips = await getTripsQuery();
	const routes = await getRoutes();
	return trips.map((tItem) => {
		const { route_long_name, route_short_name } = routes.find(
			(rItem) => rItem.route_id == tItem.route_id
		);
		return {
			...tItem,
			route_long_name,
			route_short_name,
		};
	});
};

export const getStopTimesByStops = async (stops) => {
	await openDb(config);
	const stopsObj = stops ? { stop_id: stops.split(',') } : {};
	const stopTimes = await getStoptimes(stopsObj).catch((e) => console.log(e));
	return await updateStopTimes(stopTimes);
};

export const getStopLocations = async (stops) => {
	await openDb(config);
	const stopsObj = stops ? { stop_id: stops.split(',') } : {};
	return await getStops(stopsObj).catch((e) => console.log(e));
};

export const getStopTimeLocation = async (stops) => {
	const locations = await getStopLocations(stops);
	const times = await getStopTimesByStops(stops);
	const trips = await getTrips();
	return joinTimesAndLocations(locations, times, trips);
};

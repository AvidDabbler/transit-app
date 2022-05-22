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

const addRouteInfo = (mainList, routeList, id) => {
	return mainList.map((tItem) => {
		const routeInfo = routeList.find((rItem) => rItem[id] === tItem[id]);
		console.log('routeInfo', routeInfo);
		console.log('tItem', tItem);
		return {
			...tItem,
			route_long_name: routeInfo.route_long_name,
			route_short_name: routeInfo.route_short_name,
		};
	});
};

export const getRoutes = async () => {
	await openDb(config);
	return await getRoutesQuery();
};

export const getTrips = async () => {
	await openDb(config);
	const trips = await getTripsQuery();
	const routes = await getRoutes();
	return addRouteInfo(trips, routes, 'route_id');
};

export const getStopTimesByStops = async (stops) => {
	await openDb(config);
	const stopsObj = stops ? { stop_id: stops.split(',') } : {};
	const trips = await getTrips();
	const stopTimes = await getStoptimes(stopsObj).catch((e) => console.log(e));
	const updatedTimes = addRouteInfo(stopTimes, trips, 'trip_id');
	return await updateStopTimes(updatedTimes);
};

export const getStopLocations = async (stops) => {
	await openDb(config);
	const stopsObj = stops ? { stop_id: stops.split(',') } : {};
	return await getStops(stopsObj).catch((e) => console.log(e));
};

export const getStopTimeLocation = async (stops) => {
	const locations = await getStopLocations(stops);
	const times = await getStopTimesByStops(stops);
	return joinTimesAndLocations(locations, times);
};

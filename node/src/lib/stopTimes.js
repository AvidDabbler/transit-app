import { env } from '../index.js';
import moment from 'moment-timezone';

const paddedNumber = (number) =>
	number < 10 ? `0${number}` : number.toString();

const joinById = (item, attrList, id) => {
	const idValue = item[id];
	const attr = attrList
		.filter((el) => el[id] === idValue)
		.slice()
		.sort((a, b) => a.departure_timestamp - b.departure_timestamp);
	return {
		...item,
		times: attr,
	};
};

const updateTime = (time) => {
	const [hour, min, sec] = time.split(':').map((item) => parseInt(item)); // eslint-disable-line
	const localHour = moment().tz(env.TIMEZONE).hour() + hour;
	return {
		time: `${paddedNumber(localHour)}:${paddedNumber(min)}:${paddedNumber(
			sec
		)}`,
		timestamp: moment()
			.tz(env.TIMEZONE)
			.hour(hour)
			.minute(min)
			.second(sec)
			.valueOf(),
	};
};

export const updateStopTimes = (stopTimes) => {
	return stopTimes.map((item) => {
		const { time: arrival_time, timestamp: arrival_timestamp } = updateTime(
			item.arrival_time
		);
		const { time: departure_time, timestamp: departure_timestamp } = updateTime(
			item.departure_time
		);
		return {
			...item,
			arrival_time,
			arrival_timestamp,
			departure_timestamp,
			departure_time,
		};
	});
};

export const joinTimesAndLocations = async (locations, times, trips) => {
	return locations.map((loc) => joinById(loc, times, 'stop_id', trips));
};

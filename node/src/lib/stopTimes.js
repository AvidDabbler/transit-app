import { env } from '../index.js';
import moment from 'moment-timezone';

const paddedNumber = (number) =>
	number < 10 ? `0${number}` : number.toString();

const joinById = (item, attrList, id) => {
	const idValue = item[id];
	const attr = attrList.find((el) => el[id] === idValue);
	return {
		...item,
		...attr,
	};
};

const updateTime = (time) => {
	const [hour, min, sec] = time.split(':').map((item) => parseInt(item)); // eslint-disable-line
	const localHour = moment().tz(env.TIMEZONE).hour() + hour;
	return `${paddedNumber(localHour)}:${paddedNumber(min)}:${paddedNumber(sec)}`;
};

export const updateStopTimes = (stopTimes) => {
	return stopTimes.map((item) => {
		return {
			...item,
			arrival_time: updateTime(item.arrival_time),
			departure_time: updateTime(item.departure_time),
		};
	});
};

export const joinTimesAndLocations = (locations, times) => {
	return locations.map((loc) => joinById(loc, times, 'stop_id'));
};

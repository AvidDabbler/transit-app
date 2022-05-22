import axios from 'axios';
import { store, appActions } from '../store/store';

const getData = async (route: string, params: any) => {
	return await axios.get(`http://localhost:4000/${route}`);
};

export const updateStops = async (stops: string[] | null = null) => {
	const stopsListString = stops ? { stops: JSON.stringify(stops) } : null;
	const { data: stopTimes } = await getData(
		'getStopTimeLocation',
		stopsListString
	);

	console.log('updated stops');

	store.dispatch(appActions.setStops(stopTimes));
};

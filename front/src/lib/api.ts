import axios from 'axios';
import { store, appActions } from '../store/store';
import { ApiResponse } from '../types';

const getData = async (route: string, params: any) => {
	return await axios.get(`http://localhost:4000/${route}`);
};

export const updateStops = async (stops: string[] | null = null) => {
	const stopsListString = stops ? { stops: JSON.stringify(stops) } : null;
	const { data: stopTimes } = await getData(
		'getStopTimeLocation',
		stopsListString
	);

	store.dispatch(
		appActions.setStops(
			stopTimes.map((item: ApiResponse) => {
				return {
					...item,
					isOpen: false,
				};
			})
		)
	);
};

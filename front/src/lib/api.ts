import axios from 'axios';

const getData = async (route: string, params: any) => {
	const search = new URLSearchParams(params);
	return await axios.get(
		`http://localhost:4000/${route}`
	);
};

export const updateStops = async (stops: string[] | null = null) => {
	const stopsListString = stops ? { stops: JSON.stringify(stops) } : null;
	const {data} = await getData('getStopTimeLocation', stopsListString);
	console.log(data);
};

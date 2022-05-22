import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../types';

const initialState: AppState = {
	time: '',
	date: '',
	stops: [],
	walkTimes: [],
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setTime: (state, action) => {
			state.time = action.payload.time;
			state.date = action.payload.date;
		},
		setStops: (state, action) => {
			state.stops = action.payload;
		},
		setWalkTimes: (state, action) => {
			state.walkTimes = action.payload;
		},
		setIsOpen: (state, action) => {
			state.stops = state.stops.map((item) => {
				if (action.payload == item.stop_id) {
					return { ...item, isOpen: true };
				} else {
					return { ...item, isOpen: false };
				}
			});
		},
	},
});

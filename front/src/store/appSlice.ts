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
	},
});

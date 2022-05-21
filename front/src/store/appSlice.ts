

import { createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { AppState } from '../types';

const initialState: AppState = {
	time: '',
	date: ''
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
		setTime: (state, action) => {
			state.time = action.payload.time
			state.date = action.payload.date
		},
  },
});
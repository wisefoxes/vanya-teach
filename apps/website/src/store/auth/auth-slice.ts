import { createSlice } from '@reduxjs/toolkit';

type State = {
	isOpen: boolean;
	isRegistration: boolean;
};

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isOpen: false,
		isRegistration: false,
	} as State,
	reducers: {
		open: (state) => {
			state.isOpen = true;
		},
		close: (state) => {
			state.isOpen = false;
		},
	},
});

export const { name: authReducerName, reducer: authReducer, actions: authActions } = authSlice;

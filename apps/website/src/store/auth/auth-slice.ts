import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalState } from './types';

type State = {
	isOpen: boolean;
	modalState: ModalState;
};

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isOpen: false,
		modalState: 'login',
	} as State,
	reducers: {
		open: (state) => {
			state.isOpen = true;
		},
		close: (state) => {
			state.isOpen = false;
		},
		setType: (state: State, { payload }: PayloadAction<ModalState>) => {
			state.modalState = payload;
		},
	},
});

export const { name: authReducerName, reducer: authReducer, actions: authActions } = authSlice;

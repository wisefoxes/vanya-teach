import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {},
	reducers: {},
});

export const { name: cartReducerName, reducer: cartReducer, actions: cartActions } = cartSlice;

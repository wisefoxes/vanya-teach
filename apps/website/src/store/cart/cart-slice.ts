import { createSlice } from '@reduxjs/toolkit';
import { addToCartAsync } from './cart-thunks';

type CartState = {
	addingItem: boolean;
	items: {
		[k in string]: boolean;
	};
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: {},
		addingItem: false,
	} as CartState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(addToCartAsync.pending, (state) => {
			state.addingItem = true;
		});
	},
});

export const { name: cartReducerName, reducer: cartReducer, actions: cartActions } = cartSlice;

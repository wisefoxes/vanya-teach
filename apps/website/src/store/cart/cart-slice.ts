import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'types/product';
import { addToCartAsync } from './cart-thunks';

type CartState = {
	items: {
		[k in string]: Product;
	};
	addedProduct: Product | null;
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: {},
		addedProduct: null,
	} as CartState,
	reducers: {
		resetAddedProduct: (state) => {
			state.addedProduct = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(addToCartAsync.fulfilled, (state, { payload }) => {
			state.addedProduct = payload;
		});
	},
});

export const { name: cartReducerName, reducer: cartReducer, actions: cartActions } = cartSlice;

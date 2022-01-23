import { createSlice } from '@reduxjs/toolkit';
import { addToCartAsync } from './cart-thunks';

type CartState = {
	addingItem: boolean;
	items: {
		[k in string]: boolean;
	};
	cartUpdateVisible: boolean;
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: {},
		addingItem: false,
		cartUpdateVisible: false,
	} as CartState,
	reducers: {
		addToCart: (state) => {
			state.cartUpdateVisible = true;
		},
		resetCartUpdate: (state) => {
			state.cartUpdateVisible = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(addToCartAsync.pending, (state) => {
			state.addingItem = true;
		});
	},
});

export const { name: cartReducerName, reducer: cartReducer, actions: cartActions } = cartSlice;

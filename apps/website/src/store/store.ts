import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, cartReducerName } from './cart';

const store = configureStore({
	reducer: {
		[cartReducerName]: cartReducer,
	},
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export { store, AppDispatch, RootState };

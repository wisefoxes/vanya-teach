import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, cartReducerName } from './cart';
import { tabsReducer, tabsReducerName } from './tabs';

const store = configureStore({
	reducer: {
		[cartReducerName]: cartReducer,
		[tabsReducerName]: tabsReducer,
	},
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export { store, AppDispatch, RootState };

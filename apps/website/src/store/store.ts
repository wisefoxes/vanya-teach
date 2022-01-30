import { configureStore } from '@reduxjs/toolkit';
import { authReducer, authReducerName } from './auth';
import { cartReducer, cartReducerName } from './cart';
import { tabsReducer, tabsReducerName } from './tabs';

const store = configureStore({
	reducer: {
		[cartReducerName]: cartReducer,
		[tabsReducerName]: tabsReducer,
		[authReducerName]: authReducer,
	},
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export { store, AppDispatch, RootState };

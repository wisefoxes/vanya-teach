import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'types/product';
import { getAllTabsAsync, getLatestTabsAsync, getPopularTabsAsync } from '.';

type TabsState = {
	popular: Product[];
	latest: Product[];
	tabs: Product[];
};

const tabsSlice = createSlice({
	name: 'tabs',
	initialState: {
		popular: [],
		latest: [],
		tabs: [],
	} as TabsState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllTabsAsync.fulfilled, (state, { payload }) => {
				state.tabs = payload;
			})
			.addCase(getPopularTabsAsync.fulfilled, (state, { payload }) => {
				state.popular = payload;
			})
			.addCase(getLatestTabsAsync.fulfilled, (state, { payload }) => {
				state.latest = payload;
			});
	},
});

export const { name: tabsReducerName, reducer: tabsReducer, actions: tabsActions } = tabsSlice;

import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'types/product';
import { getTabByIdAsync } from './tabs-thunks';
import { getAllTabsAsync, getLatestTabsAsync, getPopularTabsAsync } from '.';

type TabsState = {
	popular: Product[];
	latest: Product[];
	tabs: Product[];
	tab: Product | null;
};

const tabsSlice = createSlice({
	name: 'tabs',
	initialState: {
		popular: [],
		latest: [],
		tabs: [],
		tab: null,
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
			})
			.addCase(getTabByIdAsync.fulfilled, (state, { payload }) => {
				state.tab = payload;
			});
	},
});

export const { name: tabsReducerName, reducer: tabsReducer, actions: tabsActions } = tabsSlice;

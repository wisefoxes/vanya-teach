import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const selectTabs = (state: RootState) => state.tabs;

const selectPopularTabs = createSelector(selectTabs, (tabs) => tabs.popular);
const selectLatestTabs = createSelector(selectTabs, (tabs) => tabs.latest);
const selectAllTabs = createSelector(selectTabs, (tabs) => tabs.tabs);

export { selectPopularTabs, selectLatestTabs, selectAllTabs };

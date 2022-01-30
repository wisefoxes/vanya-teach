import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectAllTabs, selectLatestTabs, selectPopularTabs, selectTabDetails } from 'store/selectors/tabs';
import { Product } from 'types/product';
import { getAllTabsAsync, getLatestTabsAsync, getPopularTabsAsync, getTabByIdAsync } from './tabs-thunks';

function useAllTabs(): Product[] {
	const dispatch = useAppDispatch();
	const tabs = useAppSelector(selectAllTabs);

	useEffect(() => {
		dispatch(getAllTabsAsync());
	}, [dispatch]);

	return tabs;
}

function useLatestTabs(): Product[] {
	const dispatch = useAppDispatch();
	const tabs = useAppSelector(selectLatestTabs);

	useEffect(() => {
		dispatch(getLatestTabsAsync());
	}, []);

	return tabs;
}

function usePopularTabs(): Product[] {
	const dispatch = useAppDispatch();
	const tabs = useAppSelector(selectPopularTabs);

	useEffect(() => {
		dispatch(getPopularTabsAsync());
	}, [dispatch]);

	return tabs;
}

function useTabDetails(id: string): Product | null {
	const tab = useAppSelector(selectTabDetails);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getTabByIdAsync(id));
	}, [dispatch, id]);

	return tab;
}

export { useAllTabs, useLatestTabs, usePopularTabs, useTabDetails };

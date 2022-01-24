import { useEffect } from 'react';
import { addToCartAsync } from 'store/cart';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectLatestTabs } from 'store/selectors/tabs';
import { getLatestTabsAsync } from 'store/tabs';
import { Product } from 'types/product';

function useLatestTabs(): { tabs: Product[]; addToCart: (product: Product) => void } {
	const dispatch = useAppDispatch();
	const tabs = useAppSelector(selectLatestTabs);

	const addToCart = (product: Product): void => {
		dispatch(addToCartAsync(product));
	};

	useEffect(() => {
		dispatch(getLatestTabsAsync());
	}, []);

	return { tabs, addToCart };
}

export { useLatestTabs };

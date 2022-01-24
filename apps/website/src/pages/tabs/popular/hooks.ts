import { useEffect } from 'react';
import { addToCartAsync } from 'store/cart';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectPopularTabs } from 'store/selectors/tabs';
import { getPopularTabsAsync } from 'store/tabs';
import { Product } from 'types/product';

function usePopularTabs(): { tabs: Product[]; addToCart: (product: Product) => void } {
	const dispatch = useAppDispatch();
	const tabs = useAppSelector(selectPopularTabs);

	const addToCart = (product: Product): void => {
		dispatch(addToCartAsync(product));
	};

	useEffect(() => {
		dispatch(getPopularTabsAsync());
	}, [dispatch]);

	return { tabs, addToCart };
}

export { usePopularTabs };

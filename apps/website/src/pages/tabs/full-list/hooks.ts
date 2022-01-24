import { useEffect } from 'react';
import { addToCartAsync } from 'store/cart';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectAllTabs } from 'store/selectors/tabs';
import { getAllTabsAsync } from 'store/tabs';
import { Product } from 'types/product';

function useAllTabs(): { tabs: Product[]; addToCart: (product: Product) => void } {
	const dispatch = useAppDispatch();
	const tabs = useAppSelector(selectAllTabs);

	const addToCart = (product: Product): void => {
		dispatch(addToCartAsync(product));
	};

	useEffect(() => {
		dispatch(getAllTabsAsync());
	}, [dispatch]);

	return { tabs, addToCart };
}

export { useAllTabs };

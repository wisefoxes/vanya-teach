import { debounce, UnsubscribeFn } from 'lib/utils/debounce';
import { useEffect } from 'react';
import { cartActions } from 'store/cart';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectAddedProduct } from 'store/selectors/cart';
import { Product } from 'types/product';

const CLOSE_CART_TIMEOUT = 10000;

function useAutomaticReset(): UnsubscribeFn {
	const dispatch = useAppDispatch();
	const [delayedReset, unsubscribe] = debounce(() => dispatch(cartActions.resetAddedProduct()), CLOSE_CART_TIMEOUT);

	useEffect(() => {
		delayedReset();
	}, [delayedReset]);

	return unsubscribe;
}

function useCartUpdate(): { close: () => void; product: Product | null } {
	const dispatch = useAppDispatch();
	const addedProduct = useAppSelector(selectAddedProduct);

	const unsubscribe = useAutomaticReset();

	const close = (): void => {
		unsubscribe();
		dispatch(cartActions.resetAddedProduct());
	};

	return { product: addedProduct, close };
}

export { useCartUpdate };

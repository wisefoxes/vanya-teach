import { debounce, UnsubscribeFn } from 'lib/utils/debounce';
import { useEffect } from 'react';
import { cartActions } from 'store/cart';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectAddedProduct, selectCartUpdating } from 'store/selectors/cart';
import { Product } from 'types/product';

const CLOSE_CART_TIMEOUT = 10000;

function useAutomaticReset(): UnsubscribeFn {
	const dispatch = useAppDispatch();
	const updating = useAppSelector(selectCartUpdating);
	const [delayedReset, unsubscribe] = debounce(() => dispatch(cartActions.resetUpdating()), CLOSE_CART_TIMEOUT);

	useEffect(() => {
		if (updating) {
			delayedReset();
		}
	}, [updating]);

	return unsubscribe;
}

function useCartUpdate(): { close: () => void; resetProduct: () => void; open: boolean; product: Product | null } {
	const dispatch = useAppDispatch();
	const updating = useAppSelector(selectCartUpdating);
	const addedProduct = useAppSelector(selectAddedProduct);

	const unsubscribe = useAutomaticReset();

	const close = (): void => {
		unsubscribe();
		dispatch(cartActions.resetUpdating());
	};

	const resetProduct = (): void => {
		dispatch(cartActions.resetAddedProduct());
	};

	return { open: updating, product: addedProduct, close, resetProduct };
}

export { useCartUpdate };

import { useAppDispatch } from 'store/hooks';
import { Product } from 'types/product';
import { addToCartAsync } from './cart-thunks';

function useAddToCart(): (p: Product) => void {
	const dispatch = useAppDispatch();

	return (product: Product): void => {
		dispatch(addToCartAsync(product));
	};
}

export { useAddToCart };

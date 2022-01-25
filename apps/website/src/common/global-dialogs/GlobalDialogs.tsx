import { FC } from 'react';
import { useAppSelector } from 'store/hooks';
import { selectAddedProduct } from 'store/selectors/cart';
import { CartUpdate } from './cart-update';

const GlobalDialogs: FC = () => {
	const addedProduct = useAppSelector(selectAddedProduct);

	const cartUpdated = addedProduct && <CartUpdate />;

	return <>{cartUpdated}</>;
};

export { GlobalDialogs };

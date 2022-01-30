import { FC } from 'react';
import { useAppSelector } from 'store/hooks';
import { selectAuthOpen } from 'store/selectors/auth';
import { selectAddedProduct } from 'store/selectors/cart';
import { Auth } from './auth';
import { CartUpdate } from './cart-update';

const GlobalDialogs: FC = () => {
	const addedProduct = useAppSelector(selectAddedProduct);
	const authIsOpen = useAppSelector(selectAuthOpen);

	const cartUpdated = addedProduct && <CartUpdate />;
	const auth = authIsOpen && <Auth />;

	return (
		<>
			{cartUpdated}
			{auth}
		</>
	);
};

export { GlobalDialogs };

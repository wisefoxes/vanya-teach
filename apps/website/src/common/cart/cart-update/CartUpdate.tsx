import { useStaticInfo } from 'core/static/static-context';
import { useDebouncedExecution } from 'lib/utils/debounce';
import { FC } from 'react';
import { cartActions } from 'store/cart';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectAddedProduct, selectCartUpdating } from 'store/selectors/cart';
import { Button } from 'ui-kit/atoms/button';
import { Divider } from 'ui-kit/atoms/divider';
import { ResponsiveImage } from 'ui-kit/atoms/responsive-image';
import { Dialog } from 'ui-kit/molecules/dialog';
import { CartUpdateStyled, Content, Subtotal, Title } from './CartUpdate.style';

const CLOSE_CART_TIMEOUT = 10000;

const CartUpdate: FC = () => {
	const dispatch = useAppDispatch();
	const updating = useAppSelector(selectCartUpdating);
	const addedProduct = useAppSelector(selectAddedProduct);
	const { staticHost } = useStaticInfo();

	const closeHandler = (): void => {
		dispatch(cartActions.resetUpdating());
	};
	const closedHandler = (): void => {
		dispatch(cartActions.resetAddedProduct());
	};

	useDebouncedExecution(closeHandler, CLOSE_CART_TIMEOUT);

	return (
		<Dialog open={updating} onClose={closeHandler} onClosed={closedHandler}>
			<CartUpdateStyled>
				<Title level={4}>Добавлено в корзину</Title>
				<Content>
					<ResponsiveImage name="image" staticHost={staticHost} breakpoints={{ s: 200 }} ratio="1/1" />
					<div>Hozier - Take me to church. Формат: PDF + GPX Сложность: 9 фингербаллов</div>
					<div>${addedProduct?.price}</div>
				</Content>
				<Divider />
				<Subtotal>
					<div>Промежуточный итог</div>
					<div>${addedProduct?.price}</div>
				</Subtotal>
				<Button type="primary">Посмотреть корзину</Button>
			</CartUpdateStyled>
		</Dialog>
	);
};

export { CartUpdate };

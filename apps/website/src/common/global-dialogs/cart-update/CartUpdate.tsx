import { useStaticInfo } from 'core/static/static-context';
import { FC } from 'react';
import { Button } from 'ui-kit/atoms/button';
import { Divider } from 'ui-kit/atoms/divider';
import { ResponsiveImage } from 'ui-kit/atoms/responsive-image';
import { Dialog } from 'ui-kit/molecules/dialog';
import { CartUpdateStyled, Content, Subtotal, Title } from './CartUpdate.style';
import { useCartUpdate } from './hooks';

const CartUpdate: FC = () => {
	const { staticHost } = useStaticInfo();
	const { close, product } = useCartUpdate();

	const productContent = product && (
		<Content>
			<ResponsiveImage name="image" staticHost={staticHost} breakpoints={{ s: 200 }} ratio="1/1" />
			<div>{product.name}</div>
			<div>${product.price}</div>
		</Content>
	);

	return (
		<Dialog onClose={close}>
			<CartUpdateStyled>
				<Title level={4}>Добавлено в корзину</Title>
				{productContent}
				<Divider />
				<Subtotal>
					<div>Промежуточный итог</div>
					<div>$1000</div>
				</Subtotal>
				<Button type="primary">Посмотреть корзину</Button>
			</CartUpdateStyled>
		</Dialog>
	);
};

export { CartUpdate };

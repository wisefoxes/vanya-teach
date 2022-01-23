import { useStaticInfo } from 'core/static/static-context';
import { FC } from 'react';
import { Button } from 'ui-kit/atoms/button';
import { Divider } from 'ui-kit/atoms/divider';
import { ResponsiveImage } from 'ui-kit/atoms/responsive-image';
import { Dialog } from 'ui-kit/molecules/dialog';
import { CartUpdateStyled, Content, Subtotal, Title } from './CartUpdate.style';

const CartUpdate: FC = () => {
	const { staticHost } = useStaticInfo();

	return (
		<Dialog open>
			<CartUpdateStyled>
				<Title level={4}>Добавлено в корзину</Title>
				<Content>
					<ResponsiveImage name="image" staticHost={staticHost} breakpoints={{ s: 200 }} ratio="1/1" />
					<div>Hozier - Take me to church. Формат: PDF + GPX Сложность: 9 фингербаллов</div>
					<div>$349</div>
				</Content>
				<Divider />
				<Subtotal>
					<div>Промежуточный итог</div>
					<div>$349</div>
				</Subtotal>
				<Button type="primary">Посмотреть корзину</Button>
			</CartUpdateStyled>
		</Dialog>
	);
};

export { CartUpdate };

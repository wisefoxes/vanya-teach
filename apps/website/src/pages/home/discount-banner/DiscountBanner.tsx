import { FC } from 'react';
import { Heading } from 'ui-kit/atoms/heading';
import { Input } from 'ui-kit/atoms/input';
import { BannerStyled, GetDiscount, SubHeader } from './DiscountBanner.style';

const DiscountBanner: FC = () => {
	return (
		<BannerStyled>
			<Heading>Все курсы со скидкой 30%!</Heading>
			<SubHeader>Оставь заявку и получи уникальную скидку 30% на все курсы сразу</SubHeader>
			<Input type="primary" />
			<GetDiscount>Хочу все 3 этапа сразу</GetDiscount>
		</BannerStyled>
	);
};

export { DiscountBanner };

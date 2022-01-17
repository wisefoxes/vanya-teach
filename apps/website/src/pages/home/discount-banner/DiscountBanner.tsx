import { FC } from 'react';
import { Button } from 'ui-kit/atoms/button';
import { Heading } from 'ui-kit/atoms/heading';
import { Input } from 'ui-kit/atoms/input';
import { BannerStyled, SubHeader } from './DiscountBanner.style';

const DiscountBanner: FC = () => {
	return (
		<BannerStyled>
			<Heading>Все курсы со скидкой 30%!</Heading>
			<SubHeader>Оставь заявку и получи уникальную скидку 30% на все курсы сразу</SubHeader>
			<Input type="primary" />
			<Button>Хочу все 3 этапа сразу</Button>
		</BannerStyled>
	);
};

export { DiscountBanner };

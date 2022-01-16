import { useStaticInfo } from 'core/static/static-context';
import { FC } from 'react';
import { Button } from 'ui-kit/atoms/button';
import { ResponsiveImage } from 'ui-kit/atoms/responsive-image';
import { FooterStyled } from './Footer.style';

const Footer: FC = () => {
	const { staticHost } = useStaticInfo();

	return (
		<FooterStyled>
			<div>
				<div>ИП ЗАХАРЕНКО ИВАН ВЛАДИМИРОВИЧ</div>
				<div>УНП: 692172893</div>
				<div>Свидетельство о государственной регистрации № 692172893 от 19.11.2020 выдано Минским горисполкомом</div>
			</div>
			<Button>Политика конфиденциальности</Button>
			<Button>Правила оплаты</Button>
			<ResponsiveImage name="payment-types" staticHost={staticHost} breakpoints={{ s: 275 }} ratio="275/487" ext="png" />
		</FooterStyled>
	);
};

export { Footer };

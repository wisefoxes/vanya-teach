import { FC } from 'react';
import { Logo } from './logo';
import { Hamburger } from './hamburger';
import { HeaderStyled } from './Header.style';
import { MobileMenu } from './mobile-menu';

const Header: FC = () => {
	return (
		<HeaderStyled>
			<Logo />
			<Hamburger />
			<MobileMenu />
		</HeaderStyled>
	);
};

export { Header };

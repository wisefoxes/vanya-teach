import { FC } from 'react';
import { Hamburger } from './hamburger';
import { HeaderStyled } from './Header.style';
import { Logo } from './logo';

const Header: FC = () => {
	return (
		<HeaderStyled>
			<Logo />
			<Hamburger />
		</HeaderStyled>
	);
};

export { Header };

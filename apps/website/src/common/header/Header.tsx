import { FC } from 'react';
import { Hamburger } from './hamburger';
import { HeaderStyled } from './Header.style';

const Header: FC = () => {
	return (
		<HeaderStyled>
			<Hamburger />
		</HeaderStyled>
	);
};

export { Header };

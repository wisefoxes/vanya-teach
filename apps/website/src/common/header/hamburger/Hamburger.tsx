import { FC } from 'react';
import { HamburgerLine, HamburgerStyled } from './Hamburger.style';

const Hamburger: FC = () => {
	return (
		<HamburgerStyled>
			<HamburgerLine />
			<HamburgerLine />
			<HamburgerLine />
		</HamburgerStyled>
	);
};

export { Hamburger };

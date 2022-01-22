import { FC, useState } from 'react';
import { useLocationChange } from 'lib/url/location';
import { Logo } from 'ui-kit/atoms/logo';
import { Dialog } from 'ui-kit/molecules/dialog';
import { Hamburger } from './hamburger';
import { HeaderContent, HeaderStyled, RightMenu } from './Header.style';
import { CartButton } from './cart-button';
import { MobileMenu } from './mobile-menu';

const Header: FC = () => {
	const [open, setOpen] = useState(false);

	const clickHamburgerHandler = (): void => setOpen(!open);
	const clickOverlayHandler = (): void => setOpen(false);

	useLocationChange(() => setOpen(false));

	const menu = (
		<Dialog open={open} onOverlayClick={clickOverlayHandler} onClose={clickOverlayHandler}>
			<MobileMenu />
		</Dialog>
	);

	return (
		<HeaderStyled>
			<HeaderContent>
				<Logo />
				<RightMenu>
					<CartButton />
					<Hamburger onClick={clickHamburgerHandler} />
				</RightMenu>
				{menu}
			</HeaderContent>
		</HeaderStyled>
	);
};

export { Header };

import { FC } from 'react';
import { Logo } from 'ui-kit/atoms/logo';
import { useOpener } from 'lib/hooks/opener';
import { Hamburger } from './hamburger';
import { HeaderContent, HeaderStyled, RightMenu } from './Header.style';
import { CartButton } from './cart-button';
import { MobileMenu } from './mobile-menu';

const Header: FC = () => {
	const { open, close, isOpen } = useOpener();

	return (
		<HeaderStyled>
			<MobileMenu open={isOpen} onClose={close} />
			<HeaderContent>
				<Logo />
				<RightMenu>
					<CartButton />
					<Hamburger onClick={open} />
				</RightMenu>
			</HeaderContent>
		</HeaderStyled>
	);
};

export { Header };

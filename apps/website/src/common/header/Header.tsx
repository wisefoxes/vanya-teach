import { FC, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import { BodyAttached } from 'ui-kit/atoms/body-attached';
import { useLocationChange } from 'lib/url/location';
import { Logo } from './logo';
import { Hamburger } from './hamburger';
import { HeaderContent, HeaderStyled, MobileMenuAnimated, MobileMenuTransitionTime, OverlayAnimated } from './Header.style';
const Header: FC = () => {
	const [open, setOpen] = useState(false);
	const mobileMenuRef = useRef<HTMLDivElement>(null);

	const clickHamburgerHandler = (): void => {
		setOpen(!open);
	};

	useLocationChange(() => setOpen(false));

	const menu = (
		<Transition nodeRef={mobileMenuRef} in={open} timeout={{ exit: MobileMenuTransitionTime }} mountOnEnter unmountOnExit>
			{(state): JSX.Element => (
				<BodyAttached>
					<div ref={mobileMenuRef}>
						<MobileMenuAnimated transitionStatus={state} />
						<OverlayAnimated transitionStatus={state} />
					</div>
				</BodyAttached>
			)}
		</Transition>
	);

	return (
		<HeaderStyled>
			<HeaderContent>
				<Logo />
				<Hamburger open={open} onClick={clickHamburgerHandler} />
				{menu}
			</HeaderContent>
		</HeaderStyled>
	);
};

export { Header };

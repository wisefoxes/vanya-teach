import React, { FC, HTMLAttributes, useState } from 'react';
import { HamburgerLine, HamburgerStyled } from './Hamburger.style';

type Props = HTMLAttributes<HTMLButtonElement>;

const Hamburger: FC<Props> = (props: Props) => {
	const { onClick, ...restProps } = props;
	const [open, setOpen] = useState(false);

	const clickHamburgerHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
		setOpen(!open);

		if (onClick) {
			onClick(event);
		}
	};

	return (
		<HamburgerStyled onClick={clickHamburgerHandler} {...restProps}>
			<HamburgerLine />
			<HamburgerLine />
			<HamburgerLine />
		</HamburgerStyled>
	);
};

export { Hamburger };

import React, { FC, HTMLAttributes, useState } from 'react';
import { HamburgerLine, HamburgerStyled, LinesWrapper } from './Hamburger.style';

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
			<LinesWrapper>
				<HamburgerLine index={0} mutated={open} />
				<HamburgerLine index={1} mutated={open} />
				<HamburgerLine index={2} mutated={open} />
				<HamburgerLine index={3} mutated={open} />
			</LinesWrapper>
		</HamburgerStyled>
	);
};

export { Hamburger };

import React, { FC, HTMLAttributes } from 'react';
import { HamburgerLine, HamburgerStyled, LinesWrapper } from './Hamburger.style';

type Props = HTMLAttributes<HTMLButtonElement>;

const Hamburger: FC<Props> = (props: Props) => {
	const { onClick, ...restProps } = props;

	const clickHamburgerHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<HamburgerStyled onClick={clickHamburgerHandler} {...restProps}>
			<LinesWrapper>
				<HamburgerLine />
				<HamburgerLine />
				<HamburgerLine />
			</LinesWrapper>
		</HamburgerStyled>
	);
};

export { Hamburger };

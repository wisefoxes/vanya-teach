import { rem } from 'polished';
import styled, { css } from 'styled-components';

const LineAnimationTime = 300;

const HamburgerStyled = styled.button`
	padding: ${rem(5)};
	box-sizing: content-box;
	border: none;
	background-color: transparent;
	cursor: pointer;
	display: block;
`;

const LinesWrapper = styled.div`
	width: ${rem(28)};
	position: relative;
	height: ${rem(20)};
	width: ${rem(28)};
`;

const HamburgerLine = styled.span<{ index: number; mutated: boolean }>`
	background-color: var(--color__basic-900);
	display: block;
	width: 100%;
	height: ${rem(3)};
	position: absolute;
	opacity: 1;
	top: 0;
	transform: rotate(0);
	transition: all ${LineAnimationTime}ms ease-in-out;

	${({ index }) =>
		(index === 1 || index === 2) &&
		css`
			top: ${rem(8)};
		`}

	${({ index }) =>
		index === 3 &&
		css`
			top: ${rem(16)};
		`}

  ${({ mutated, index }) =>
		mutated &&
		css`
			top: ${(index === 0 || index === 3) && rem(8)};
			opacity: ${(index === 0 || index === 3) && '0'};
			transform: ${index === 1 && 'rotate(45deg)'};
			transform: ${index === 2 && 'rotate(-45deg)'};
		`}
`;

export { HamburgerStyled, LinesWrapper, HamburgerLine };

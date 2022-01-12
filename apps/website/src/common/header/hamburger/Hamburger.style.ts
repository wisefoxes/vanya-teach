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

const HamburgerLine = styled.span.attrs<
	{ index: number; mutated: boolean },
	{ firstLine: boolean; lastLine: boolean; mid1Line: boolean; mid2Line: boolean; mutated: boolean }
>(({ index, mutated }) => ({
	firstLine: index === 0,
	lastLine: index === 3,
	mid1Line: index === 1,
	mid2Line: index === 2,
	mutated,
}))<{ index: number; mutated: boolean }>`
	background-color: var(--color__basic-900);
	display: block;
	width: 100%;
	height: ${rem(3)};
	position: absolute;
	opacity: 1;
	top: 0;
	transform: rotate(0);
	transition: all ${LineAnimationTime}ms ease-in-out;

	${({ mid1Line, mid2Line }) =>
		(mid1Line || mid2Line) &&
		css`
			top: ${rem(8)};
		`}

	${({ lastLine }) =>
		lastLine &&
		css`
			top: ${rem(16)};
		`}

  ${({ mutated, firstLine, lastLine, mid1Line, mid2Line }) =>
		mutated &&
		css`
			top: ${(firstLine || lastLine) && rem(8)};
			opacity: ${(firstLine || lastLine) && '0'};
			transform: ${mid1Line && 'rotate(45deg)'};
			transform: ${mid2Line && 'rotate(-45deg)'};
		`}
`;

export { HamburgerStyled, LinesWrapper, HamburgerLine };

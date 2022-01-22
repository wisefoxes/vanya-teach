import { rem } from 'polished';
import styled from 'styled-components';

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
	height: ${rem(20)};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const HamburgerLine = styled.span`
	background-color: var(--color__basic-900);
	display: block;
	width: 100%;
	height: ${rem(3)};
`;

export { HamburgerStyled, LinesWrapper, HamburgerLine };

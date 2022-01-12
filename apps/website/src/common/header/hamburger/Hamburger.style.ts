import { rem } from 'polished';
import styled from 'styled-components';

const HamburgerStyled = styled.button`
	display: flex;
	flex-direction: column;
	width: ${rem(28)};
	padding: ${rem(5)};
	box-sizing: content-box;
	border: none;
	background-color: transparent;
	gap: ${rem(5)};
	position: relative;
	cursor: pointer;
`;
const HamburgerLine = styled.span`
	background-color: var(--color__basic-900);
	display: block;
	width: 100%;
	height: ${rem(3)};
`;

export { HamburgerStyled, HamburgerLine };

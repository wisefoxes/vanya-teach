import { rem } from 'polished';
import styled from 'styled-components';

const TextButtonStyled = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	text-decoration: underline;
	font-family: var(--font__primary);
	padding: ${rem(5)} ${rem(10)};
	font-size: inherit;
`;

export { TextButtonStyled };

import { rem } from 'polished';
import styled from 'styled-components';

const HeaderStyled = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: var(--color__basic-100);
	max-width: var(--max-width);
	display: flex;
	justify-content: space-between;
	padding: ${rem(20)};
	box-sizing: border-box;
	align-items: center;
	z-index: 2;
`;

export { HeaderStyled };

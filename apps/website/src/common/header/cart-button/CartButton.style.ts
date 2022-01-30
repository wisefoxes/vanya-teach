import { rem } from 'polished';
import styled from 'styled-components';

const CartButtonStyled = styled.button`
	border: none;
	background-color: transparent;
	display: flex;
	align-items: center;
	padding: ${rem(6)};
	width: ${rem(35)};
	cursor: pointer;
`;

export { CartButtonStyled };

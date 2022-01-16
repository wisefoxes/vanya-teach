import { rem } from 'polished';
import styled from 'styled-components';

const ButtonStyled = styled.button`
	display: flex;
	height: ${rem(50)};
	background-color: var(--color__basic-100);
	border-radius: ${rem(10)};
	justify-content: center;
	align-items: center;
	border: var(--color__primary-400);
	font-size: ${rem(16)};
	font-weight: var(--font-weight__semi-bold);
	transition: background-color 0.2s ease-in-out;
	color: var(--color__basic-900);
	width: 100%;
	cursor: pointer;

	&:hover {
		background-color: var(--color__primary-400);
	}
`;

export { ButtonStyled };

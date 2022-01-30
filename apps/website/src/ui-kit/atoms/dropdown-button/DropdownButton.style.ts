import { rem } from 'polished';
import styled, { css } from 'styled-components';

const DropdownButtonStyled = styled.button`
	display: flex;
	background-color: transparent;
	border: none;
	color: var(--color__basic-900);
	cursor: pointer;
	font-family: inherit;
	padding: ${rem(5)} ${rem(10)};
	margin: ${rem(-5)} ${rem(-10)};
	font-size: inherit;
	align-items: center;
	gap: ${rem(6)};
	position: relative;
`;

const DropdownButtonIcon = styled.span<{ $expanded: boolean }>`
	${({ $expanded }) => css`
		height: ${rem(5)};
		width: ${rem(5)};
		border-style: solid;
		border-color: var(--color__basic-900);
		border-width: ${rem(1)} ${rem(1)} 0 0;
		transform: rotate(135deg);
		transition: all 0.3s ease-in;

		${$expanded &&
		css`
			transform: rotate(-45deg);
		`}
	`}
`;

export { DropdownButtonStyled, DropdownButtonIcon };

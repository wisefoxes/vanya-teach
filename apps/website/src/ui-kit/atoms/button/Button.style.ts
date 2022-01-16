import { rem } from 'polished';
import styled, { css } from 'styled-components';
import { ButtonType } from './types';

const ButtonStyled = styled.button.attrs<{ $type: ButtonType }, { $primary: boolean }>(({ $type }) => ({ $primary: $type === 'primary' }))<{
	$type: ButtonType;
}>`
	${({ $primary }) => css`
		--bg-color: var(--color__basic-100);
		--bg-color-hover: var(--color__primary-400);

		display: flex;
		height: ${rem(50)};
		background-color: var(--bg-color);
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
			background-color: var(--bg-color-hover);
		}

		${$primary &&
		css`
			--bg-color: --color__primary-400;
			--bg-color-hover: --color__basic-100;
		`}
	`}
`;

export { ButtonStyled };

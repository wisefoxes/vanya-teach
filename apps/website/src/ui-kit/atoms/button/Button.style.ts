import { rem } from 'polished';
import styled, { css } from 'styled-components';
import { ButtonType } from './types';

const ButtonStyled = styled.button.attrs<{ $type: ButtonType }, { $primary: boolean; $basic: boolean }>(({ $type }) => ({
	$primary: $type === 'primary',
	$basic: $type === 'basic',
}))<{
	$type: ButtonType;
}>`
	${({ $basic, $primary }) => css`
		${$basic &&
		css`
			--bg-color: var(--color__basic-100);
			--bg-color-hover: var(--color__primary-400);
		`}

		${$primary &&
		css`
			--bg-color: var(--color__primary-400);
			--bg-color-hover: var(--color__basic-100);
		`}

		display: flex;
		height: ${rem(50)};
		background-color: var(--bg-color);
		border-radius: ${rem(10)};
		justify-content: center;
		align-items: center;
		border: ${rem(2)} solid var(--color__primary-400);
		font-weight: var(--font-weight__semi-bold);
		font-family: var(--font__primary);
		transition: background-color 0.2s ease-in-out;
		color: var(--color__basic-900);
		width: 100%;
		cursor: pointer;
		padding: 0 ${rem(15)};

		&:hover {
			background-color: var(--bg-color-hover);
		}
	`}
`;

export { ButtonStyled };

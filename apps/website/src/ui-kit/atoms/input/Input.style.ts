import { rem } from 'polished';
import styled, { css } from 'styled-components';
import type { InputType } from './types';

const InputStyled = styled.input.attrs<{ $appearance: InputType }, { $primary: boolean }>(({ $appearance }) => ({
	$primary: $appearance === 'primary',
}))<{
	$appearance: InputType;
}>`
	${({ $primary }) => css`
		--bg-color: var(--color__basic-100);
		--border-color: var(--color__primary-400);

		display: block;
		border-radius: ${rem(10)};
		height: ${rem(50)};
		border: ${rem(2)} solid var(--border-color);
		background-color: var(--bg-color);
		width: 100%;
		box-sizing: border-box;
		font-family: var(--font__primary);
		font-size: ${rem(16)};
		padding: 0 ${rem(20)};

		${$primary &&
		css`
			--bg-color: var(--color__primary-500);
			--border-color: var(--color__basic-100);
		`}
	`}
`;

export { InputStyled };

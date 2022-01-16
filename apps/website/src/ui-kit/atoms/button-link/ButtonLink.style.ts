import { rem } from 'polished';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ButtonLinkType } from './types';

const ButtonLinkStyled = styled(Link).attrs<{ $type: ButtonLinkType }, { $primary: boolean }>(({ $type }) => ({
	$primary: $type === 'primary',
}))<{
	$type: ButtonLinkType;
}>`
	${({ $primary }) => css`
		--bg-color: var(--color__basic-100);
		--bg-color-hover: var(--color__primary-400);

		display: flex;
		height: ${rem(70)};
		background-color: var(--bg-color);
		border-radius: ${rem(10)};
		justify-content: center;
		align-items: center;
		border: var(--color__primary-400);
		font-weight: var(--font-weight__semi-bold);
		font-size: ${rem(16)};
		text-decoration: none;
		color: var(--color__basic-900);
		transition: background-color 0.2s ease-in-out;
		border: ${rem(1)} solid var(--color__primary-400);

		&:hover {
			background-color: var(--bg-color-hover);
		}

		${$primary &&
		css`
			--bg-color: var(--color__primary-500);
			--bg-color-hover: var(--color__primary-400);
		`}
	`}
`;

export { ButtonLinkStyled };

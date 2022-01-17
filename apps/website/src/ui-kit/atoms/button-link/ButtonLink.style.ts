import { rem } from 'polished';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ButtonLinkSize, ButtonLinkType } from './types';

const ButtonLinkStyled = styled(Link).attrs<{ $type: ButtonLinkType; $size: ButtonLinkSize }, { $primary: boolean; $large: boolean }>(
	({ $type, $size }) => ({
		$primary: $type === 'primary',
		$large: $size === 'large',
	}),
)<{
	$type: ButtonLinkType;
	$size: ButtonLinkSize;
}>`
	${({ $primary, $large }) => css`
		--bg-color: var(--color__basic-100);
		--bg-color-hover: var(--color__primary-400);
		--height: ${rem(50)};

		display: flex;
		height: var(--height);
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

		${$large &&
		css`
			--height: ${rem(70)};
		`}
	`}
`;

export { ButtonLinkStyled };

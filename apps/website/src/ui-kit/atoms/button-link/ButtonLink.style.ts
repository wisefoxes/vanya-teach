import { rem } from 'polished';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const ButtonLinkStyled = styled(Link).attrs<{ $type: string }, { $primary: boolean }>(({ $type }) => ({ $primary: $type === 'primary' }))<{
	$type: string;
}>`
	${({ $primary }) => css`
		display: flex;
		height: ${rem(70)};
		background-color: var(--color__basic-100);
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
			background-color: var(--color__primary-400);
		}

		${$primary &&
		css`
			background-color: var(--color__primary-500);

			&:hover {
				background-color: var(--color__primary-400);
			}
		`}
	`}
`;

export { ButtonLinkStyled };

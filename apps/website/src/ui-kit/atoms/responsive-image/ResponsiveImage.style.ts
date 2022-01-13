import styled, { css } from 'styled-components';
import { calculateHeightOffest } from './helpers';

const ImageStyled = styled.img.attrs<{ ratio: string }, { offset: string }>(({ ratio }) => ({ offset: calculateHeightOffest(ratio) }))<{
	ratio: string;
}>`
	${({ offset }) => css`
		display: block;
		padding-top: ${offset}%;
		background-color: var(--color__basic-400);
		opacity: 0.7;
	`}
`;

export { ImageStyled };

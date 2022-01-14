import styled, { css } from 'styled-components';
import { calculateHeightOffest } from './helpers';

const ImageStyled = styled.img.attrs<{ ratio: string }, { offset: string }>(({ ratio }) => ({ offset: calculateHeightOffest(ratio) }))<{
	ratio: string;
}>`
	${() => css`
		display: block;
		width: 100%;
	`}
`;

export { ImageStyled };

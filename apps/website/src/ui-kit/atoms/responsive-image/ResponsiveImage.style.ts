import styled, { css } from 'styled-components';
import { calculateOffestByRatio } from './helpers';

const ContainerStyled = styled.div.attrs<{ ratio: string; loaded: boolean }, { offset: string }>(({ ratio }) => ({
	offset: calculateOffestByRatio(ratio),
}))<{
	ratio: string;
	loaded: boolean;
}>`
	${({ offset, loaded }) => css`
		display: block;
		padding-top: ${offset}%;
		position: relative;
		background-color: var(--color__basic-300);

		${loaded &&
		css`
			background-color: transparent;
		`}
	`}
`;

const ImageStyled = styled.img<{ loaded: boolean }>`
	${({ loaded }) => css`
		display: block;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		opacity: 0;
		transition: opacity 0.3s ease-in;

		${loaded &&
		css`
			opacity: 1;
		`}
	`}
`;

export { ImageStyled, ContainerStyled };

import { rem } from 'polished';
import styled, { css } from 'styled-components';

const HeadingStyled = styled.h1.attrs<
	{ as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' },
	{ h1: boolean; h2: boolean; h3: boolean; h4: boolean; h5: boolean; h6: boolean }
>(({ as }) => ({
	h1: as === 'h1',
	h2: as === 'h2',
	h3: as === 'h3',
	h4: as === 'h4',
	h5: as === 'h5',
	h6: as === 'h6',
}))`
	${({ h1, h2, h3, h4, h5, h6 }) => css`
		font-weight: var(--font-weight__medium);
		line-height: 1.2;
		text-align: center;

		${h1 &&
		css`
			font-size: ${rem(45)};
		`}

		${h2 &&
		css`
			font-size: ${rem(40)};
		`}

    ${h3 &&
		css`
			font-size: ${rem(32)};
		`}

    ${h4 &&
		css`
			font-size: ${rem(28)};
		`}

    ${h5 &&
		css`
			font-size: ${rem(24)};
		`}

		${h6 &&
		css`
			font-size: ${rem(22)};
		`}
	`}
`;

export { HeadingStyled };

import { extraLargeScreen, largeScreen, mediumScreen } from 'design/settings/screen-sizes';
import { css, FlattenSimpleInterpolation } from 'styled-components';

const mediumScreenMedia = (content: FlattenSimpleInterpolation): FlattenSimpleInterpolation => css`
	@media (min-width: ${mediumScreen}) {
		${content};
	}
`;

const largeScreenMedia = (content: FlattenSimpleInterpolation): FlattenSimpleInterpolation => css`
	@media (min-width: ${largeScreen}) {
		${content};
	}
`;

const extraLargeScreenMedia = (content: FlattenSimpleInterpolation): FlattenSimpleInterpolation => css`
	@media (min-width: ${extraLargeScreen}) {
		${content};
	}
`;

export { mediumScreenMedia, largeScreenMedia, extraLargeScreenMedia };

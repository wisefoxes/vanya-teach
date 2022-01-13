import { rem } from 'polished';
import { css } from 'styled-components';

const bodyPadding = css`
	padding-top: ${rem(120)};
`;

const pageContainer = css`
	padding-left: ${rem(20)};
	padding-right: ${rem(20)};
`;

export { bodyPadding, pageContainer };

import { rem } from 'polished';
import styled from 'styled-components';

const HeadingStyled = styled.h1`
	font-weight: var(--font-weight__medium);
	line-height: 1.2;
	text-align: center;

	${styled.h1`
		font-size: ${rem(45)};
	`}

	${styled.h2`
		font-size: ${rem(40)};
	`}

  ${styled.h6`
		font-size: ${rem(22)};
	`}
`;

export { HeadingStyled };

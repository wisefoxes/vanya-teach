import { pageContainer } from 'design/generic/layout';
import { rem } from 'polished';
import styled from 'styled-components';

const SectionStyled = styled.section`
	padding-top: ${rem(100)};
	${pageContainer};
	width: 75%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: ${rem(100)};
`;

export { SectionStyled };

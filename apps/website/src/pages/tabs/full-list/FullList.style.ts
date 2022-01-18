import { pageContainer } from 'design/generic/layout';
import { rem } from 'polished';
import styled from 'styled-components';

const FullListStyled = styled.section`
	padding: ${rem(50)} 0;
	${pageContainer}
	display: flex;
	flex-direction: column;
	gap: ${rem(20)};
`;

export { FullListStyled };

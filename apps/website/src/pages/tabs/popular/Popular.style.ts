import { pageContainer } from 'design/generic/layout';
import { rem } from 'polished';
import styled from 'styled-components';

const PopularStyled = styled.section`
	padding: ${rem(40)} 0;
	${pageContainer}
	display: flex;
	flex-direction: column;
	gap: ${rem(20)};
`;

export { PopularStyled };

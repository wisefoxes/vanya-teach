import { pageContainer } from 'design/generic/layout';
import { rem } from 'polished';
import styled from 'styled-components';

const LatestStyled = styled.section`
	padding: ${rem(50)} 0;
	${pageContainer}
	background-color: var(--color__basic-200);
	display: flex;
	flex-direction: column;
	gap: ${rem(30)};
`;

export { LatestStyled };

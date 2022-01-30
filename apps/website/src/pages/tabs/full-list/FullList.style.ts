import { pageContainer } from 'design/generic/layout';
import { rem } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FullListStyled = styled.section`
	padding: ${rem(50)} 0;
	${pageContainer}
	display: flex;
	flex-direction: column;
	gap: ${rem(20)};
`;

const ProductLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;

export { FullListStyled, ProductLink };

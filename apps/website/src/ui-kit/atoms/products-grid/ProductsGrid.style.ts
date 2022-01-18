import { rem } from 'polished';
import styled from 'styled-components';

const ProductsGridStyled = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: ${rem(20)};
`;

export { ProductsGridStyled };

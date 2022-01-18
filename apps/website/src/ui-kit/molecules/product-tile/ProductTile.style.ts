import { rem } from 'polished';
import styled from 'styled-components';

const ProductTileStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${rem(10)};
`;

const ProductTitle = styled.div`
	font-size: ${rem(22)};
	line-height: 1.35;
	display: flex;
	flex-grow: 1;
`;

const Description = styled.div`
	color: var(--color__basic-500);
`;

const Complexity = styled.div`
	color: var(--color__basic-500);
`;

const Price = styled.div`
	font-size: ${rem(20)};
`;

export { ProductTileStyled, ProductTitle, Description, Complexity, Price };

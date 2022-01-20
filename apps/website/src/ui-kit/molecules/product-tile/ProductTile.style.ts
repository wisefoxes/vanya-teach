import { rem } from 'polished';
import styled from 'styled-components';
import { Button } from 'ui-kit/atoms/button';

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

const ImageWrapper = styled.div`
	position: relative;
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

const AddToCart = styled(Button)`
	position: absolute;
	bottom: ${rem(10)};
	width: min(90%, ${rem(250)});
	transform: translateX(-50%);
	left: 50%;
`;

export { ProductTileStyled, ProductTitle, ImageWrapper, Description, Complexity, Price, AddToCart };

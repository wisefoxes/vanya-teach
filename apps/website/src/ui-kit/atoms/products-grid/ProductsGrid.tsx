import { FC, HTMLAttributes } from 'react';
import { ProductsGridStyled } from './ProductsGrid.style';

type Props = HTMLAttributes<HTMLUListElement>;

const ProductsGrid: FC<Props> = (props: Props) => {
	const { children } = props;

	return <ProductsGridStyled>{children}</ProductsGridStyled>;
};

export { ProductsGrid };

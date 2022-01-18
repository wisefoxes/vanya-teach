import { FC } from 'react';
import { Heading } from 'ui-kit/atoms/heading';
import { ProductsGrid } from 'ui-kit/atoms/products-grid';
import { ProductTile } from 'ui-kit/molecules/product-tile';
import { LatestStyled } from './Latest.style';

const Latest: FC = () => {
	return (
		<LatestStyled>
			<Heading>Недавно добавленные табы</Heading>
			<ProductsGrid>
				<ProductTile title="Hozier - Take me to church" description="Формат: PDF + GPX" complexity={9} price={349} />
				<ProductTile title="Linkin Park - Numb" description="Формат: PDF + GPX" complexity={9} price={349} />
			</ProductsGrid>
		</LatestStyled>
	);
};

export { Latest };

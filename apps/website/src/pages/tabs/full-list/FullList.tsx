import { FC } from 'react';
import { Heading } from 'ui-kit/atoms/heading';
import { ProductsGrid } from 'ui-kit/atoms/products-grid';
import { ProductTile } from 'ui-kit/molecules/product-tile';
import { FullListStyled } from './FullList.style';

const FullList: FC = () => {
	return (
		<FullListStyled>
			<Heading>Выбери нужные тебе табы и оплати в 3 клика</Heading>
			<ProductsGrid>
				<ProductTile title="Кино - Перемен" description="Формат: PDF + GPX" complexity={9} price={349} />
				<ProductTile title="Hozier - Take me to church" description="Формат: PDF + GPX" complexity={9} price={349} />
				<ProductTile title="The Cranberries - Zombie" description="Формат: PDF + GPX" complexity={9} price={349} />
				<ProductTile title="Linkin Park - Numb" description="Формат: PDF + GPX" complexity={9} price={349} />
				<ProductTile title="Джарахов Markul - Я в моменте" description="Формат: PDF + GPX" complexity={9} price={349} />
				<ProductTile title="Dabro - Юность" description="Формат: PDF + GPX" complexity={9} price={349} />
				<ProductTile title="The Weeknd - Bliding Lights" description="Формат: PDF + GPX" complexity={9} price={349} />
			</ProductsGrid>
		</FullListStyled>
	);
};

export { FullList };

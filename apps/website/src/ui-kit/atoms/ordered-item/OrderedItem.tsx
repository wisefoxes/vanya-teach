import { FC, HTMLAttributes } from 'react';
import { ItemDescription, ItemNumber, ItemTitle, OrderedItemStyled, TextContent } from './OrderedItem.style';

type Props = {
	num: number;
	title?: string;
} & HTMLAttributes<HTMLLIElement>;

const OrderedItem: FC<Props> = (props: Props) => {
	const { children, num, title = '', ...restProps } = props;

	const description = children && <ItemDescription>{children}</ItemDescription>;

	return (
		<OrderedItemStyled {...restProps}>
			<ItemNumber>{num}</ItemNumber>
			<TextContent>
				<ItemTitle>{title}</ItemTitle>
				{description}
			</TextContent>
		</OrderedItemStyled>
	);
};

export { OrderedItem };

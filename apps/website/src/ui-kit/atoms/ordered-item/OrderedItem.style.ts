import { rem } from 'polished';
import styled from 'styled-components';

const OrderedItemStyled = styled.li`
	display: flex;
`;

const ItemNumber = styled.span`
	width: ${rem(42)};
	height: ${rem(42)};
	display: flex;
	align-items: center;
	justify-content: center;
	border: ${rem(1)} solid var(--color__primary-500);
	border-radius: 50%;
	box-sizing: border-box;
	flex-shrink: 0;
`;

const TextContent = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: ${rem(20)};
`;

const ItemTitle = styled.span`
	font-size: ${rem(24)};
	font-weight: var(--font-weight__medium);
	line-height: 1.55;
`;

const ItemDescription = styled.span`
	margin-top: ${rem(15)};
	line-height: 1.45;
	font-size: ${rem(18)};
`;

export { OrderedItemStyled, ItemNumber, TextContent, ItemTitle, ItemDescription };

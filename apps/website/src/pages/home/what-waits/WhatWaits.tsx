import { FC } from 'react';
import { Heading } from 'ui-kit/atoms/heading';
import { ItemDescription, ItemNumber, ItemTitle, List, ListItem, TextContent, WhatWaitsStyled } from './WhatWaits.style';

const WhatWaits: FC = () => {
	return (
		<WhatWaitsStyled>
			<Heading>Что еще вас ждет?</Heading>
			<List>
				<ListItem>
					<ItemNumber>1</ItemNumber>
					<TextContent>
						<ItemTitle>Домашние задания</ItemTitle>
						<ItemDescription>
							Каждый урок заканчивается домашним заданием. К вам прикреплен ментор, который проверяет вашу игру и не допустит к следующему
							уроку, если у вас есть ошибки.
						</ItemDescription>
					</TextContent>
				</ListItem>
				<ListItem>
					<ItemNumber>2</ItemNumber>
					<TextContent>
						<ItemTitle>Чат + внутреннее соревнование</ItemTitle>
						<ItemDescription>
							Все участники и кураторы курса находятся в общем чате. За каждое выполненное задание вы получаете баллы, можете отслеживать
							свой прогресс и обменивать баллы на бонусы.
						</ItemDescription>
					</TextContent>
				</ListItem>
				<ListItem>
					<ItemNumber>3</ItemNumber>
					<TextContent>
						<ItemTitle>Выпускной</ItemTitle>
						<ItemDescription>
							После обучения нас ждет онлайн-выпускной, на котором каждый сыграет свою выпускную композицию! Одна из таких - LINKIN PARK
							&quot;NUMB&quot;.
						</ItemDescription>
					</TextContent>
				</ListItem>
			</List>
		</WhatWaitsStyled>
	);
};

export { WhatWaits };

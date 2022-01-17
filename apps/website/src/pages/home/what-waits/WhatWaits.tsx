import { FC } from 'react';
import { Heading } from 'ui-kit/atoms/heading';
import { OrderedItem } from 'ui-kit/atoms/ordered-item';
import { List, WhatWaitsStyled } from './WhatWaits.style';

const WhatWaits: FC = () => {
	return (
		<WhatWaitsStyled>
			<Heading>Что еще вас ждет?</Heading>
			<List>
				<OrderedItem num={1} title="Домашние задания">
					Каждый урок заканчивается домашним заданием. К вам прикреплен ментор, который проверяет вашу игру и не допустит к следующему
					уроку, если у вас есть ошибки.
				</OrderedItem>
				<OrderedItem num={2} title="Чат + внутреннее соревнование">
					Все участники и кураторы курса находятся в общем чате. За каждое выполненное задание вы получаете баллы, можете отслеживать свой
					прогресс и обменивать баллы на бонусы.
				</OrderedItem>
				<OrderedItem num={3} title="Выпускной">
					После обучения нас ждет онлайн-выпускной, на котором каждый сыграет свою выпускную композицию! Одна из таких - LINKIN PARK
					&quot;NUMB&quot;.
				</OrderedItem>
			</List>
		</WhatWaitsStyled>
	);
};

export { WhatWaits };

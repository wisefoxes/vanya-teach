import { FC, HTMLAttributes } from 'react';
import { Heading } from 'ui-kit/atoms/heading';
import { ResultArticle } from './result-article';
import { WhatGetStyled } from './WhatGet.style';

type Props = HTMLAttributes<HTMLElement>;

const WhatGet: FC<Props> = (props: Props) => {
	return (
		<WhatGetStyled {...props}>
			<Heading>Что вы получите после прохождения курса?</Heading>
			<ResultArticle icon="🚀" label="Система знаний">
				Четкая система знаний, которая позволит вам качественно сыграть любую аранжировку
			</ResultArticle>
			<ResultArticle icon="🎸" label="Фингерстайл техники">
				Четкая система знаний, которая позволит вам качественно сыграть любую аранжировку
			</ResultArticle>
			<ResultArticle icon="💡" label="Обучающая платформа">
				Доступ к обучающей платформе даже после окончания курса
			</ResultArticle>
		</WhatGetStyled>
	);
};

export { WhatGet };

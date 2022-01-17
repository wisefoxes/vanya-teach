import { FC } from 'react';
import { Heading } from 'ui-kit/atoms/heading';
import { IconTitle, ResultDescription, ResultsArticle, WhatGetStyled } from './WhatGet.style';

const WhatGet: FC = () => {
	return (
		<WhatGetStyled>
			<Heading>Что вы получите после прохождения курса?</Heading>
			<ResultsArticle>
				<IconTitle>
					<span role="img" aria-label="Система знаний">
						🚀
					</span>
				</IconTitle>
				<ResultDescription>Четкая система знаний, которая позволит вам качественно сыграть любую аранжировку</ResultDescription>
			</ResultsArticle>
			<ResultsArticle>
				<IconTitle>
					<span role="img" aria-label="Фингерстайл техники">
						🎸
					</span>
				</IconTitle>
				<ResultDescription>Четкая система знаний, которая позволит вам качественно сыграть любую аранжировку</ResultDescription>
			</ResultsArticle>
			<ResultsArticle>
				<IconTitle>
					<span role="img" aria-label="Фингерстайл техники">
						💡
					</span>
				</IconTitle>
				<ResultDescription>Доступ к обучающей платформе даже после окончания курса</ResultDescription>
			</ResultsArticle>
		</WhatGetStyled>
	);
};

export { WhatGet };

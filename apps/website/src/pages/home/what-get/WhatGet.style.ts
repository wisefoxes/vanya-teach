import { rem } from 'polished';
import styled from 'styled-components';

const WhatGetStyled = styled.section`
	padding: ${rem(100)} ${rem(20)};
	display: flex;
	flex-direction: column;
	gap: ${rem(20)};
	background-color: var(--color__basic-200);
`;

const ResultsArticle = styled.article`
	display: flex;
	flex-direction: column;
	gap: ${rem(30)};
`;

const IconTitle = styled.h2`
	font-size: ${rem(60)};
	text-align: center;
`;

const ResultDescription = styled.div`
	line-height: 1.55;
	text-align: center;
	font-size: ${rem(18)};
`;

export { WhatGetStyled, ResultsArticle, IconTitle, ResultDescription };

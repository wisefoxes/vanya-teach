import { pageContainer } from 'design/generic/layout';
import { rem } from 'polished';
import styled from 'styled-components';

const WhatWaitsStyled = styled.section`
	padding: ${rem(100)} 0;
	${pageContainer};
`;

const List = styled.ol`
	display: flex;
	flex-direction: column;
	gap: ${rem(20)};
	margin-top: ${rem(30)};
`;

export { WhatWaitsStyled, List };

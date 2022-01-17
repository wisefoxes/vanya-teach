import { rem } from 'polished';
import styled from 'styled-components';

const WhatGetStyled = styled.section`
	padding: ${rem(100)} ${rem(20)};
	display: flex;
	flex-direction: column;
	gap: ${rem(20)};
	background-color: var(--color__basic-200);
`;

export { WhatGetStyled };

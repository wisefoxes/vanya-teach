import { rem } from 'polished';
import styled from 'styled-components';

const DividerStyled = styled.hr`
	height: ${rem(1)};
	background: var(--color__basic-300);
	display: block;
	width: 100%;
	border: none;
`;

export { DividerStyled };

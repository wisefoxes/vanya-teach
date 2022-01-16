import { rem } from 'polished';
import styled from 'styled-components';

const FooterStyled = styled.footer`
	padding: ${rem(60)} ${rem(50)} ${rem(50)};
	font-size: ${rem(18)};
	color: var(--color__basic-700);
	font-weight: var(--font-weight__light);
	line-height: 1.65;
	display: flex;
	flex-direction: column;
	gap: ${rem(20)};
`;

export { FooterStyled };

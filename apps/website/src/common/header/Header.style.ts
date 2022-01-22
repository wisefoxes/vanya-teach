import { rem } from 'polished';
import styled from 'styled-components';

const MobileMenuTransitionTime = 300;

const HeaderStyled = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: var(--color__basic-100);
	padding: ${rem(20)};
	box-sizing: border-box;
	z-index: 3;
`;

const HeaderContent = styled.div`
	max-width: var(--max-width);
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const RightMenu = styled.div`
	display: flex;
	gap: ${rem(10)};
`;

export { HeaderStyled, HeaderContent, MobileMenuTransitionTime, RightMenu };

import { rem } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoStyled = styled(Link)`
	font-size: ${rem(22)};
	font-weight: var(--font-weight__semi-bold);
	color: var(--color__basic-900);
	text-decoration: none;
`;

const LogoSecondTitle = styled.span`
	padding: 0 ${rem(5)};
	background-color: var(--color__primary-500);
	border-radius: ${rem(8)};
`;

export { LogoStyled, LogoSecondTitle };

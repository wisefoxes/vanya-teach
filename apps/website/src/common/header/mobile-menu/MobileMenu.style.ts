import { rem } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationStyled = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	background-color: var(--color__basic-100);
	width: 100%;
	padding: ${rem(30)} ${rem(20)};
	display: flex;
	box-sizing: border-box;
	top: ${rem(70)};
`;

const NavigationList = styled.ul`
	width: 100%;
`;

const NavigationLink = styled(Link)`
	padding: ${rem(10)};
	font-size: ${rem(22)};
	display: block;
	text-decoration: none;
	color: var(--color__basic-900);
	text-align: center;
`;

export { NavigationStyled, NavigationList, NavigationLink };

import { rem } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'ui-kit/atoms/button';
import { Divider } from 'ui-kit/atoms/divider';

const NavigationStyled = styled.nav`
	background-color: var(--color__basic-100);
	padding: ${rem(30)} ${rem(20)};
	display: flex;
	box-sizing: border-box;
	flex-direction: column;
	gap: ${rem(10)};
`;

const MenuList = styled.ul`
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

const MenuButton = styled(Button)`
	max-width: ${rem(300)};
	margin: 0 auto;
`;

const Separator = styled(Divider)`
	height: ${rem(2)};
`;

export { NavigationStyled, MenuList, NavigationLink, Separator, MenuButton };

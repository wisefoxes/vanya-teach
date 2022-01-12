import { FC } from 'react';
import ReactDOM from 'react-dom';
import { NavigationLink, NavigationList, NavigationStyled } from './MobileMenu.style';

const MobileMenu: FC = () => {
	const menu = (
		<NavigationStyled>
			<NavigationList>
				<li>
					<NavigationLink to="/courses">Курсы</NavigationLink>
				</li>
				<li>
					<NavigationLink to="/about">Обо мне</NavigationLink>
				</li>
				<li>
					<NavigationLink to="/tabs">Табы</NavigationLink>
				</li>
			</NavigationList>
		</NavigationStyled>
	);

	return ReactDOM.createPortal(menu, document.body);
};

export { MobileMenu };

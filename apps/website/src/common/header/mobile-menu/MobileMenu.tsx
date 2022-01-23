import { FC, HTMLAttributes, PropsWithRef } from 'react';
import { NavigationLink, MenuList, NavigationStyled, Separator, MenuButton } from './MobileMenu.style';

type Props = HTMLAttributes<HTMLElement>;

const MobileMenu: FC<PropsWithRef<Props>> = (props: Props) => {
	return (
		<NavigationStyled {...props}>
			<MenuList>
				<li>
					<NavigationLink to="/tabs">Табы</NavigationLink>
				</li>
			</MenuList>
			<Separator />
			<MenuList>
				<li>
					<MenuButton>Войти</MenuButton>
				</li>
			</MenuList>
		</NavigationStyled>
	);
};

export { MobileMenu };

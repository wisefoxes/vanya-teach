import { FC, HTMLAttributes, PropsWithRef } from 'react';
import { NavigationLink, NavigationList, NavigationStyled } from './MobileMenu.style';

type Props = HTMLAttributes<HTMLElement>;

const MobileMenu: FC<PropsWithRef<Props>> = (props: Props) => {
	return (
		<NavigationStyled {...props}>
			<NavigationList>
				<li>
					<NavigationLink to="/tabs">Табы</NavigationLink>
				</li>
			</NavigationList>
		</NavigationStyled>
	);
};

MobileMenu.displayName = 'MobileMenu';

export { MobileMenu };

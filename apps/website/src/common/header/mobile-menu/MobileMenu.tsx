import { FC, ForwardedRef, forwardRef, HTMLAttributes, PropsWithRef } from 'react';
import { NavigationLink, NavigationList, NavigationStyled } from './MobileMenu.style';

type Props = HTMLAttributes<HTMLElement>;

const MobileMenu: FC<PropsWithRef<Props>> = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
	return (
		<NavigationStyled ref={ref} {...props}>
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
});

MobileMenu.displayName = 'MobileMenu';

export { MobileMenu };

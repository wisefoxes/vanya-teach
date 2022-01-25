import { useLocationChange } from 'lib/url/location';
import { FC, HTMLAttributes } from 'react';
import { Dialog } from 'ui-kit/molecules/dialog';
import { NavigationLink, MenuList, NavigationStyled, Separator, MenuButton } from './MobileMenu.style';

type Props = {
	open?: boolean;
	onClose: () => void;
} & HTMLAttributes<HTMLElement>;

const MobileMenu: FC<Props> = (props: Props) => {
	const { open = false, onClose } = props;

	useLocationChange(onClose);

	return (
		<Dialog open={open} onClose={onClose}>
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
		</Dialog>
	);
};

export { MobileMenu };

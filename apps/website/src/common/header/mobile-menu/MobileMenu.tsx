import { useLocationChange } from 'lib/url/location';
import { FC, HTMLAttributes } from 'react';
import { useAuth } from 'store/auth';
import { Dialog } from 'ui-kit/molecules/dialog';
import { NavigationLink, MenuList, NavigationStyled, Separator, MenuButton } from './MobileMenu.style';

type Props = {
	onClose: () => void;
} & HTMLAttributes<HTMLElement>;

const MobileMenu: FC<Props> = (props: Props) => {
	const { onClose } = props;
	const { open: openAuth } = useAuth();

	useLocationChange(onClose);

	const clickLogInHandler = (): void => {
		onClose();
		openAuth();
	};

	return (
		<Dialog onClose={onClose}>
			<NavigationStyled {...props}>
				<MenuList>
					<li>
						<NavigationLink to="/tabs">Табы</NavigationLink>
					</li>
				</MenuList>
				<Separator />
				<MenuList>
					<li>
						<MenuButton onClick={clickLogInHandler}>Войти</MenuButton>
					</li>
				</MenuList>
			</NavigationStyled>
		</Dialog>
	);
};

export { MobileMenu };

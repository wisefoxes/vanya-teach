import { FC } from 'react';
import { ReactComponent as CartIcon } from 'ui-kit/icons/shopping-bag.svg';
import { CartButtonStyled } from './CartButton.style';

const CartButton: FC = () => {
	return (
		<CartButtonStyled>
			<CartIcon />
		</CartButtonStyled>
	);
};

export { CartButton };

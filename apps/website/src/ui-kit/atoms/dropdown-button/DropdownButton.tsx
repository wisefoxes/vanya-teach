import { FC, HTMLAttributes } from 'react';
import { DropdownButtonIcon, DropdownButtonStyled } from './DropdownButton.style';

type Props = {
	expanded?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const DropdownButton: FC<Props> = (props: Props) => {
	const { children, expanded = false, ...restProps } = props;

	return (
		<DropdownButtonStyled {...restProps}>
			{children}
			<DropdownButtonIcon $expanded={expanded} />
		</DropdownButtonStyled>
	);
};

export { DropdownButton };

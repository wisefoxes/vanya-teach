import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { ButtonStyled } from './Button.style';

type Props = HTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
	const { children, ...restProps } = props;

	return <ButtonStyled {...restProps}>{children}</ButtonStyled>;
};

export { Button };

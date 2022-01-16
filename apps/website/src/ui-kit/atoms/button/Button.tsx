import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { ButtonStyled } from './Button.style';
import type { ButtonType } from './types';

type Props = {
	type?: ButtonType;
} & HTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
	const { children, type = 'basic', ...restProps } = props;

	console.log(type);

	return <ButtonStyled {...restProps}>{children}</ButtonStyled>;
};

export { Button };

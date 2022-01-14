import { FC, PropsWithChildren } from 'react';
import { LinkProps } from 'react-router-dom';
import { ButtonLinkStyled } from './ButtonLink.style';

type Props = {
	type?: 'basic' | 'primary';
} & LinkProps;

const ButtonLink: FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
	const { children, type = 'basic', ...restProps } = props;

	return (
		<ButtonLinkStyled $type={type} {...restProps}>
			{children}
		</ButtonLinkStyled>
	);
};

export { ButtonLink };

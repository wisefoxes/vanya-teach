import { FC, PropsWithChildren } from 'react';
import { LinkProps } from 'react-router-dom';
import { ButtonLinkStyled } from './ButtonLink.style';
import { ButtonLinkSize, ButtonLinkType } from './types';

type Props = {
	type?: ButtonLinkType;
	size?: ButtonLinkSize;
} & LinkProps;

const ButtonLink: FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
	const { children, type = 'basic', size = 'medium', ...restProps } = props;

	return (
		<ButtonLinkStyled $type={type} $size={size} {...restProps}>
			{children}
		</ButtonLinkStyled>
	);
};

export { ButtonLink };

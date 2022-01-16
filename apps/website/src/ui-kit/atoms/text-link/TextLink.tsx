import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { LinkStyled } from './TextLink.style';

type Props = { href: string } & HTMLAttributes<HTMLAnchorElement>;

const TextLink: FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
	const { children, ...restProps } = props;

	return <LinkStyled {...restProps}>{children}</LinkStyled>;
};

export { TextLink };

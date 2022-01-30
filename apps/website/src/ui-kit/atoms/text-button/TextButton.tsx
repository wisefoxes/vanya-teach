import { FC, HTMLAttributes } from 'react';
import { TextButtonStyled } from './TextButton.style';

type Props = HTMLAttributes<HTMLButtonElement>;

const TextButton: FC<Props> = (props: Props) => {
	const { children, ...restProps } = props;

	return <TextButtonStyled {...restProps}>{children}</TextButtonStyled>;
};

export { TextButton };

import { FC, HTMLAttributes } from 'react';
import { InputStyled } from './Input.style';
import type { InputType } from './types';

type Props = {
	type?: InputType;
} & HTMLAttributes<HTMLInputElement>;

const Input: FC<Props> = (props: Props) => {
	const { type = 'basic' } = props;

	return <InputStyled $type={type} {...props} />;
};

export { Input };

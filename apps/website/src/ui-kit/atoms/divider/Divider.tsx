import { FC, HTMLAttributes } from 'react';
import { DividerStyled } from './Divider.style';

type Props = HTMLAttributes<HTMLHRElement>;

const Divider: FC<Props> = (props: Props) => {
	return <DividerStyled {...props} />;
};

export { Divider };

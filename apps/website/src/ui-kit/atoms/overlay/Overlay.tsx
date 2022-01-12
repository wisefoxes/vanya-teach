import { FC, HTMLAttributes } from 'react';
import { OverlayStyled } from './Overlay.style';

type Props = HTMLAttributes<HTMLDivElement>;

const Overlay: FC<Props> = (props: Props) => {
	return <OverlayStyled role="presentation" {...props} />;
};

export { Overlay };

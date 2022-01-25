import { useScrollLock } from 'lib/scroll/lock';
import { FC, HTMLAttributes, useRef } from 'react';
import { BodyAttached } from 'ui-kit/atoms/body-attached';
import { Overlay } from 'ui-kit/atoms/overlay';
import { ReactComponent as CrossIcon } from 'ui-kit/icons/cross.svg';
import { CrossButton, DialogLayer, Modal } from './Dialog.style';

type Props = {
	onClose: () => void;
	onOverlayClick?: () => void;
} & HTMLAttributes<HTMLDivElement>;

const Dialog: FC<Props> = (props: Props) => {
	const { onClose, onOverlayClick = onClose, children } = props;
	const modalRef = useRef<HTMLDivElement>(null);

	useScrollLock();

	return (
		<BodyAttached>
			<DialogLayer ref={modalRef}>
				<Overlay onClick={onOverlayClick} />
				<Modal role="dialog">
					{children}
					<CrossButton onClick={onClose}>
						<CrossIcon />
					</CrossButton>
				</Modal>
			</DialogLayer>
		</BodyAttached>
	);
};

export { Dialog };

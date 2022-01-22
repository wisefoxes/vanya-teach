import { useScrollLock } from 'lib/scroll/lock';
import { FC, HTMLAttributes, useRef } from 'react';
import { Transition } from 'react-transition-group';
import { BodyAttached } from 'ui-kit/atoms/body-attached';
import { ReactComponent as CrossIcon } from 'ui-kit/icons/cross.svg';
import { CrossButton, DialogLayer, DialogTransitionTime, Modal, OverlayAnimated } from './Dialog.style';

type Props = {
	onOverlayClick?: () => void;
	onClose?: () => void;
	open?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const Dialog: FC<Props> = (props: Props) => {
	const { onOverlayClick, onClose, open = false, children } = props;
	const modalRef = useRef<HTMLDivElement>(null);

	useScrollLock(open);

	return (
		<Transition nodeRef={modalRef} in={open} timeout={{ exit: DialogTransitionTime }} mountOnEnter unmountOnExit>
			{(state): JSX.Element => (
				<BodyAttached>
					<DialogLayer ref={modalRef}>
						<OverlayAnimated onClick={onOverlayClick} transitionStatus={state} />
						<Modal role="dialog" transitionStatus={state}>
							{children}
							<CrossButton onClick={onClose}>
								<CrossIcon />
							</CrossButton>
						</Modal>
					</DialogLayer>
				</BodyAttached>
			)}
		</Transition>
	);
};

export { Dialog };

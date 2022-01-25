import { useState } from 'react';

function useOpener(opened = false): { isOpen: boolean; open: () => void; close: () => void } {
	const [isOpen, setOpen] = useState(opened);

	const close = (): void => setOpen(false);
	const open = (): void => setOpen(true);

	return { isOpen, open, close };
}

export { useOpener };

import { useEffect } from 'react';

function useScrollLock(lock = false): void {
	useEffect(() => {
		if (lock) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [lock]);
}

export { useScrollLock };

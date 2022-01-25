import { useEffect } from 'react';

function useScrollLock(): void {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return (): void => {
			document.body.style.overflow = 'auto';
		};
	}, []);
}

export { useScrollLock };

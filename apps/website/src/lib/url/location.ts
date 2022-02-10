import { usePrevious } from 'lib/hooks/usePrevious';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useLocationChange(callback: () => void): void {
	const { pathname } = useLocation();
	const prevPathname = usePrevious(pathname);

	useEffect(() => {
		if (prevPathname !== undefined && prevPathname !== pathname) {
			callback();
		}
	}, [pathname, prevPathname, callback]);
}

export { useLocationChange };

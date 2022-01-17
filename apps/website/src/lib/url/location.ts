import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useLocationChange(callback: () => void): void {
	const location = useLocation();

	useEffect(callback, [location.pathname, callback]);
}

export { useLocationChange };

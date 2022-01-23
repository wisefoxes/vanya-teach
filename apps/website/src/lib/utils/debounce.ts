import { useEffect } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
function debounce(fn: (...args: any[]) => any, timeout = 300): [(...args: Parameters<typeof fn>) => ReturnType<typeof fn>, () => void] {
	let timer: number;

	return [
		(...args: Parameters<typeof fn>): ReturnType<typeof fn> => {
			clearTimeout(timer);
			timer = window.setTimeout(() => {
				fn.apply({}, args);
			}, timeout);
		},
		(): void => {
			if (timer) {
				clearTimeout(timer);
			}
		},
	];
}

function useDebouncedExecution(fn: (...args: any[]) => any, timeout = 300, deps = []): void {
	const [debouncedFn, unsubscribe] = debounce(fn, timeout);

	useEffect(() => {
		debouncedFn();

		return (): void => unsubscribe();
	}, [debouncedFn, unsubscribe, fn, ...deps]);
}

export { debounce, useDebouncedExecution };

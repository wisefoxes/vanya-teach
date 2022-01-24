/* eslint-disable @typescript-eslint/no-explicit-any */

type UnsubscribeFn = () => void;

function debounce(fn: (...args: any[]) => any, timeout = 300): [(...args: Parameters<typeof fn>) => ReturnType<typeof fn>, UnsubscribeFn] {
	let timer = 0;

	return [
		(...args: Parameters<typeof fn>): ReturnType<typeof fn> => {
			clearTimeout(timer);
			timer = window.setTimeout(() => {
				console.log('executed');
				fn.apply({}, args);
			}, timeout);
		},
		(): void => window.clearTimeout(timer),
	];
}

export { debounce, UnsubscribeFn };

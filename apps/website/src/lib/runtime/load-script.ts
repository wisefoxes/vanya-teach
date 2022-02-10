export async function loadScript(src: string): Promise<void> {
	const script = document.createElement('script');

	script.async = true;
	script.src = src;
	document.body.appendChild(script);

	return new Promise((resolve, reject) => {
		script.onload = (): void => resolve();
		script.onerror = (err): void => reject(err);
	});
}

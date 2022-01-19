const RATIO_SEPARATOR = '/';

function generateImageUrl(
	name: string,
	breakpoints: { s: number; m?: number; l?: number },
	ratio: string,
	extension: string,
): { s: string; m?: string; l?: string } {
	const { s: sWidth, m: mWidth, l: lWidth } = breakpoints;
	const sHeight = calculateImageHeight(sWidth, ratio);
	const mHeight = mWidth && calculateImageHeight(mWidth, ratio);
	const lHeight = lWidth && calculateImageHeight(lWidth, ratio);

	return {
		s: `${name}.${sWidth}x${sHeight}.${extension}`,
		m: mWidth ? `${name}.${mWidth}x${mHeight}.${extension}` : undefined,
		l: lWidth ? `${name}.${lWidth}x${lHeight}.${extension}` : undefined,
	};
}

function calculateImageHeight(width: number, ratio: string): number {
	return Math.floor(width / evaluateRatio(ratio));
}

function evaluateRatio(ratio: string): number {
	const [ratioWidth, ratioHeight] = ratio.split(RATIO_SEPARATOR);

	return Number(ratioWidth) / Number(ratioHeight);
}

function calculateOffestByRatio(ratio: string): string {
	const [ratioWidth, ratioHeight] = ratio.split(RATIO_SEPARATOR);

	return ((Number(ratioHeight) / Number(ratioWidth)) * 100).toFixed(2);
}

export { generateImageUrl, calculateOffestByRatio };

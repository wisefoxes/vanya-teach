export declare global {
	interface Window {
		google: {
			accounts: {
				id: {
					initialize: (config: { client_id: string; callback: (response: { credential: string }) => void }) => void;
					renderButton: (ref: HTMLElement, config: { theme: string; size: string; width: string }) => void;
					prompt: () => void;
				};
			};
		};
	}
}

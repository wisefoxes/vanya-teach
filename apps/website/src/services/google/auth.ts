function initializeGoogleAuth(clientID: string, callback: (credential: string) => void): void {
	window.google.accounts.id.initialize({ client_id: clientID, callback: (config) => callback(config.credential) });
}

function renderGoogleAuthButton(ref: HTMLElement): void {
	window.google.accounts.id.renderButton(ref, { theme: 'outline', size: 'large', width: 'large' });
}

export { initializeGoogleAuth, renderGoogleAuthButton };

import { environment } from 'environments/environment';
import { loadScript } from 'lib/runtime/load-script';
import { noop } from 'lib/utils/noop';
import React, { FC, useContext, useState } from 'react';
import { initializeGoogleAuth } from 'services/google/auth';

const GOOGLE_AUTH_CLIENT_URL = 'https://accounts.google.com/gsi/client';

type State = {
	google: {
		load: () => void;
		loaded: boolean;
		initialize: (callback: (credential: string) => void) => void;
	};
};

const OAuthContext = React.createContext<State | undefined>(undefined);

function useGoogleOAuth(): { load: () => void; loaded: boolean; initialize: (callback: (credential: string) => void) => void } {
	const [loaded, setLoaded] = useState(false);

	const load = async (): Promise<void> => {
		await loadScript(GOOGLE_AUTH_CLIENT_URL);
		setLoaded(true);
	};

	const initialize = (callback: (credential: string) => void): void => {
		initializeGoogleAuth(environment.auth.google.clientID, callback);
	};

	return { load, loaded, initialize };
}

const OAuthProvider: FC = ({ children }) => {
	const { load: loadGoogleScript, loaded: googleScriptLoaded, initialize: initializeGoogleOAuth } = useGoogleOAuth();

	const value = {
		google: { loaded: googleScriptLoaded, onLogin: noop, load: loadGoogleScript, initialize: initializeGoogleOAuth },
	} as State;

	return <OAuthContext.Provider value={value}>{children}</OAuthContext.Provider>;
};

function useOAuth(): State {
	const context = useContext(OAuthContext);

	if (!context) {
		throw new Error('useOAuth must be used within a OAuthProvider');
	}

	return context;
}

export { useOAuth, OAuthProvider };
